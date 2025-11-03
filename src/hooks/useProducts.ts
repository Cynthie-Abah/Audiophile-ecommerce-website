import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export const useProducts = () => {
  const products = useQuery(api.products.getAll); 

  const isLoading = products === undefined; 
  const error = products === null ? "Failed to fetch products" : null;

  return { products, isLoading, error };
};
