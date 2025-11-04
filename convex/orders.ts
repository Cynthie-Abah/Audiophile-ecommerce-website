import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// create new order
export const createOrder = mutation({
  args: {
    orderId: v.string(),
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
    subTotal: v.number(),
    shipping: v.number(),
    grandTotal: v.number(),
    tax: v.number(),
    shippingInfo: v.object({
      name: v.string(),
      email: v.string(),
      phone: v.string(),
      address: v.string(),
      zip: v.optional(v.string()),
      city: v.string(),
      country: v.string(),
      paymentMethod: v.string(),
      emoneyNumber: v.optional(v.string()),
      emoneyPin: v.optional(v.number()),
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
  args: { orderId: v.string() },
  handler: async ({ db }, { orderId }) => {
    return await db
      .query('orders')
      .filter((q) => q.eq(q.field('orderId'), orderId))
      .first();
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