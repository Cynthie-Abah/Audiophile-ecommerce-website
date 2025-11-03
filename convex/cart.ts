import { v4 as uuidv4 } from "uuid";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// create new cart/ additems to cart - CONSUMED!
export const createAddCart = mutation({
  args: {
    userId: v.string(),
    items: v.array(
      v.object({
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
        image: v.string(),
        slug: v.string(),
      })
    ),
  },

  handler: async ({ db }, args) => {
// check if user exists
    const existingCart = await db
      .query("cart")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .first();

      if (existingCart) {
        // add to existing cart
        const updatedItems = [...existingCart.items, ...args.items];
        await db.patch(existingCart._id, { items: updatedItems });
        return { success: true, id: existingCart._id, message: "Cart updated successfully" }; 
      } else {
    // create a new cart
    const newCart = {
      ...args,
    }; 

    const cart = await db.insert("cart", newCart);
    return { success: true, id: cart, message: "Cart created successfully" };
      }

  },
});

// READ - DONE
export const getCartbyId = query({
  args: { userId: v.string() },
  handler: async ({db}, {userId}) => {
    const cart = await db
      .query("cart")
      .filter((q) => q.eq(q.field("userId"), userId)).first();
    return cart;
  },
});

// Update cart item quantity
export const updateItem = mutation(async ({db}, {userId, slug, quantity } : {userId: string, slug: string, quantity: number}) => {
  const existing = await db
    .query("cart")
    .filter((q) => q.eq(q.field("userId"), userId))
    .first();

  if (!existing) {
      throw new Error("Cart not found for this user");
    }

const updatedItems = existing.items.map(item =>
  item.slug === slug ? { ...item, quantity } : item
);

  await db.patch(existing._id, { items: updatedItems });

    return {
      success: true,
      message: "Item quantity updated successfully",
    };
});

// Delete a single item from the user cart - DONE
export const deleteItem = mutation(async ({db}, { userId, slug }: {userId: string, slug: string}) => {
  const existing = await db
    .query("cart")
    .filter((q) =>q.eq(q.field("userId"), userId))
    .first();

  if (!existing) {
      throw new Error("Cart not found for this user");
    }

    // Filter out the item to be deleted
    const updatedItems = existing.items.filter(
      (item) => item.slug !== slug
    );

    // Update the cart with the remaining items
    await db.patch(existing._id, { items: updatedItems });

    return {
      success: true,
      message: "Item removed from cart successfully",
    };

});

// Clear all items from the cart - DONE
export const clearCart = mutation(async ({db}, { userId }: {userId: string}) => {
  const carts = await db
    .query("cart")
    .filter((q) => q.eq(q.field("userId"), userId))
    .collect();

  for (const cart of carts) {
    await db.delete(cart._id);
  }

    await db.insert("cart", {
      userId,
      items: [],
    });
 return {
      success: true,
      message: "Cart Cleared",
    };
});
