import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useEffect, useState } from "react";

export const useCart = () => {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    // Runs only in the browser
    if (typeof window !== "undefined") {
      const id = localStorage.getItem("userId");
      setUserId(id);
    }
  }, []);

  // Only run the query when userId is ready
  const cart = useQuery(
    api.cart.getCartbyId,
    userId ? { userId } : "skip"
  );

  const isLoading = userId === null || cart === undefined;
  const error = cart === null ? "Failed to fetch cart" : null;

  return { cart, isLoading, error };
};
