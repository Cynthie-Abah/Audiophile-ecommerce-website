import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export const useSingleProduct = (slug?: string) => {
  try {
    console.log(slug);
    
    const product = slug ? useQuery(
    api.products.getBySlug, 
    { slug } 
  ): null

  const isLoading = product === undefined;
  const error = product === null ? "Failed to fetch product" : null;
  return { product, isLoading, error };
  } catch (error) {
    throw error;
  }
  

};
