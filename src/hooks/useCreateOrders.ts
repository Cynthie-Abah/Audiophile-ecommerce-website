import { useMutation } from "convex/react";
import { toast } from 'react-toastify';
import { useState } from 'react';
import { api } from "../../convex/_generated/api";
import { NewOrder } from "../../types";
import { useClearCart } from "./cart/useClearCart";
import { useSendEmail } from "./useSendEmail";

export const useCreateOrder = ()=> {
    const {clearCart} = useClearCart();
    const {sendOrderEmail} = useSendEmail()
    const mutate = useMutation(api.orders.createOrder)
    const [isloading ,setIsLoading] = useState(false);

    const handleCreateOrder = async (order: NewOrder) => {
        setIsLoading(true)
  try {
    const data = await mutate(order)
    clearCart({userId: order.userId})
    // send email here 
    sendOrderEmail(order)
    console.log(data);
    toast.success("Successfully placed Order, Check your email for confirmation")
    setIsLoading(false)
  } catch (error) {
    setIsLoading(false)
    console.error("Error ordering", error);
    toast.error("Failed to order items");
  }
};

return {handleCreateOrder, isloading}
}