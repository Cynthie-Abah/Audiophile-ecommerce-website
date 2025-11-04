// import { Resend } from 'resend';
// import { action } from './_generated/server';
// import { Resend as ResendComponent } from "@convex-dev/resend";
// import {OrderConfirmationEmail} from '../emails/OrderConfirmationEmail'
// import { v } from 'convex/values';
// import { components } from "./_generated/api";

// const resend = new Resend(process.env.RESEND_API_KEY);
// export const resendResendComponent = new ResendComponent(components.resend, {testMode: false});

// export const sendEmail = action({
  
//    args: {
//     orderId: v.string(),
//     userId: v.string(),
//     items: v.array(
//       v.object({
//         name: v.string(),
//         price: v.number(),
//         quantity: v.number(),
//         image: v.string(),
//         slug: v.string(),
//       })
//     ),
//     subTotal: v.number(),
//     shipping: v.number(),
//     grandTotal: v.number(),
//     tax: v.number(),
//     shippingInfo: v.object({
//       name: v.string(),
//       email: v.string(),
//       phone: v.string(),
//       address: v.string(),
//       zip: v.optional(v.string()),
//       city: v.string(),
//       country: v.string(),
//       paymentMethod: v.string(),
//       emoneyNumber: v.optional(v.string()),
//       emoneyPin: v.optional(v.number()),
//     }),
//   },

//   handler: async (ctx, args) => {

//     await resend.emails.send( {
//     from: 'onboarding@resend.dev',
//     to: args.shippingInfo.email,
//     subject: `Order Confirmation #${args.orderId}`,
//     react: OrderConfirmationEmail({orderInfo: args})
//     });
//   },
// });

"use node"
import { v } from "convex/values";
import { action } from "./_generated/server";
import nodemailer from "nodemailer";
import { OrderConfirmationEmail } from "../emails/OrderConfirmationEmail"; // make sure this path is correct
import { render } from "@react-email/render";

export const sendEmail = action({
  args: {
    to: v.string(),
    subject: v.string(),
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

  handler: async (ctx, args) => {
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    if (!user || !pass) {
      throw new Error("Missing EMAIL_USER or EMAIL_PASS in environment variables");
    }

    // ✅ Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass,
      },
    });

    const html = await render(OrderConfirmationEmail({ orderInfo: args }));

    // ✅ Send email
    const info = await transporter.sendMail({
      from: `Audiophile <${user}>`,
      to: args.to,
      subject: args.subject,
      html,
    });

    console.log("✅ Email sent:", info.messageId);
    return "Email sent successfully!";
  },
});
