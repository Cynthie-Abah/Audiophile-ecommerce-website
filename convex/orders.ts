import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// create new order
export const createOrder = mutation({
  args: {
    userId: v.string(),
    items: v.array(
      v.object({
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
        image: v.string(),
        productId: v.id("products"),
      })
    ),
    totalAmount: v.number(),
    shippingInfo: v.object({
      name: v.string(),
      email: v.string(),
      phone: v.string(),
      address: v.string(),
      zip: v.string(),
      city: v.string(),
      country: v.string(),
    }),
  },

  handler: async ({ db }, args) => {
    const newOrder = {
      ...args,
      status: "pending", 
      createdAt: Date.now(),
    };

    const orderId = await db.insert("orders", newOrder);
    return { success: true, id: orderId, message: "Order created successfully" };
  },
});

// Fetch all orders
export const getOrders = query(async ({ db }) => {
  return await db.query("orders").collect();
});

// Fetch a single order by ID
export const getOrderById = query({
  args: { id: v.id("orders") },
  handler: async ({ db }, { id }) => {
    return await db.get(id);
  },
});

// Update order status (e.g., shipped, delivered, cancelled)
export const updateOrderStatus = mutation({
  args: {
    id: v.id("orders"),
    status: v.string(),
  },
  handler: async ({ db }, { id, status }) => {
    await db.patch(id, { status });
    return { success: true, message: `Order marked as ${status}` };
  },
});