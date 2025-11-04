import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({

  products: defineTable({
    id: v.number(),
    slug: v.string(),
    name: v.string(),
    available: v.float64(),
    image: v.object({
      mobile: v.string(),
      tablet: v.string(),
      desktop: v.string(),
    }),
    category: v.string(),
    categoryImage: v.object({
      mobile: v.string(),
      tablet: v.string(),
      desktop: v.string(),
    }),
    new: v.boolean(),
    price: v.number(),
    description: v.string(),
    features: v.string(),
    includes: v.array(v.object({ quantity: v.number(), item: v.string() })),
    gallery: v.object({
      first: v.object({
        mobile: v.string(),
        tablet: v.string(),
        desktop: v.string(),
      }),
      second: v.object({
        mobile: v.string(),
        tablet: v.string(),
        desktop: v.string(),
      }),
      third: v.object({
        mobile: v.string(),
        tablet: v.string(),
        desktop: v.string(),
      }),
    }),
    others: v.array(
      v.object({
        slug: v.string(),
        name: v.string(),
        image: v.object({
          mobile: v.string(),
          tablet: v.string(),
          desktop: v.string(),
        }),
      })
    ),
  }),

orders: defineTable({
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
    createdAt: v.number(),
    status: v.string() 
  }),

  cart: defineTable({
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
  })

});
