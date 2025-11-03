import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export const useCart = () => {
    const userId = localStorage.getItem('userId') ?? ''
  const cart = useQuery(api.cart.getCartbyId, {userId}); 

  const isLoading = (cart === undefined || userId === undefined); 
  const error = cart === null ? "Failed to fetch cart" : null;

  return { cart, isLoading, error };
};
