import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import {  CartItem } from '../../../types';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { getorCreateUserId } from "@/libs/utils";

export const useAddCreateCart = ()=> {
    const mutate = useMutation(api.cart.createAddCart)
    const [isloading ,setIsLoading] = useState(false);

    const handleAddToCart = async (items: CartItem[]) => {
        setIsLoading(true)
  try {
    const userId = getorCreateUserId();

    const cartInfo = {
         userId,
    items: items
    }

    const data = await mutate(cartInfo)
    console.log(data);
    toast.success("Item added to cart successfully!")
    setIsLoading(false)
  } catch (error) {
    setIsLoading(false)
    console.error("Error adding to cart:", error);
    toast.error("Failed to add to cart.");
  }
};

return {handleAddToCart, isloading}
}
