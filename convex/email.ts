// import { components } from './../node_modules/@convex-dev/resend/dist/component/_generated/api.d';
// import { Resend } from 'resend';
// import { action } from './_generated/server';
// import { Resend as ResendComponent } from "@convex-dev/resend";
// import {OrderConfirmationEmail} from '../emails/OrderConfirmationEmail'
// import { v } from 'convex/values';

// const resend = new Resend('re_CdLNtLUq_GkwGR5KwTeXFZGBoofh21boJ');
// export const resendResendComponent = new ResendComponent(components.resend, {testMode: false});

// export const sendEmail = action({
  
//    args: {
//       orderId: v.string(),
//       userId: v.string(),
//       items: v.array(
//         v.object({
//           name: v.string(),
//           price: v.number(),
//           quantity: v.number(),
//           image: v.string(),
//           productId: v.id("products"),
//         })
//       ),
//       totalAmount: v.number(),
//       shippingInfo: v.object({
//         name: v.string(),
//         email: v.string(),
//         phone: v.string(),
//         address: v.string(),
//         zip: v.string(),
//         city: v.string(),
//         country: v.string(),
//       }),
//     },

//   handler: async (ctx, args) => {

//     await resend.emails.send( {
//       from: "Me <test@mydomain.com>",
//       to: "delivered@resend.dev",
//       subject: "Hi there",

//       react: OrderConfirmationEmail({
//       userName: args.shippingInfo.name,
//       orderId: args.orderId,
//       items: args.items,
//       shipping: {},
//       // orderLink: orderLink,
//       })
//     });
//   },
// });
