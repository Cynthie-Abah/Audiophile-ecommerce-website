// import { useAction } from "convex/react";
// import { api } from "../../convex/_generated/api";
// import { NewOrder } from "../../types";


// export function useSendEmail() {
//   const sendEmail = useAction(api.email.sendEmail);

//   const triggerEmail = async (args: NewOrder) => {
//     try {
//       const res = await sendEmail(args);
//       console.log('Email sent successfully:', res);
//       return res;
//     } catch (error) {
//       console.error('Error sending email:', error);
//       throw error;
//     }
//   };

//   return { triggerEmail };
// }
import { useAction } from "convex/react";
import { api } from "../../convex/_generated/api";
import { NewOrder } from "../../types";

export const useSendEmail = () => {
  const send = useAction(api.email.sendEmail);

  const sendOrderEmail = async (orderInfo: NewOrder) => {
    await send({
      ...orderInfo,
      to: orderInfo.shippingInfo.email,
      subject: `Order Confirmation #${orderInfo.orderId}`,
    });
  };

  return { sendOrderEmail };
};
