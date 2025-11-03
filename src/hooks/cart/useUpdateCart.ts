import { getBySlug } from './../../../convex/products';
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useState } from 'react';
import { toast } from 'react-toastify';


export const useUpdateCart = () => {
    const [isLoading, setIsLoading] = useState(false)
    
        const updateItem = useMutation(api.cart.updateItem).withOptimisticUpdate(
        (localStore, { userId, slug, quantity }) => {
        try {
            setIsLoading(true)
            const cart = localStore.getQuery(api.cart.getCartbyId, { userId });
            if (cart) {
            const updatedItems = cart.items.map((item) =>
                item.slug === slug ? { ...item, quantity } : item
            );
            localStore.setQuery(api.cart.getCartbyId, { userId }, { ...cart, items: updatedItems });
            }

        } catch (error) {
            toast.error('Error updating Quantity. Pls Try Again')
            throw error
        } finally {
                setIsLoading(false)
            }
        }
        );
        return {updateItem, isLoading}
}

