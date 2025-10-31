// import { mutation, query } from "./_generated/server";

// export const create = mutation({
//   args: {
//     customerName: "string",
//     email: "string",
//     phone: "string",
//     address: "string",
//     city: "string",
//     country: "string",
//     zipCode: "string",
//     paymentMethod: "string",
//     items: "[object]", // array of { productId, name, quantity, price }
//     totals: "object", // { subtotal, shipping, vat, grandTotal }
//   },
//   handler: async (ctx, args) => {
//     const order = {
//       ...args,
//       status: "pending",
//       createdAt: Date.now(),
//     };
//     await ctx.db.insert("orders", order);
//   },
// });

// export const getAll = query({
//   args: {},
//   handler: async (ctx) => {
//     return await ctx.db.query("orders").collect();
//   },
// });

