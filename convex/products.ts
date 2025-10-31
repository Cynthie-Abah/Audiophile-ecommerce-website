import { query, mutation } from "./_generated/server";

// Get all products
export const getAll = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("products").collect();
  },
});

// // Add a new product
// export const add = mutation({
//   args: { },
//   handler: async (ctx, args) => {
//     await ctx.db.insert("products", args);
//   },
// });
