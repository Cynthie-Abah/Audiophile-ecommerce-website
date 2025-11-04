import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useState } from 'react';
import { toast } from 'react-toastify';


export const useClearCart = () => {
    const [isLoading, setIsLoading] = useState(false)
    
        const clearCart = useMutation(api.cart.clearCart).withOptimisticUpdate(
        (localStore, { userId }) => {
        try {
            setIsLoading(true)
            const cart = localStore.getQuery(api.cart.getCartbyId, { userId });
            if (cart) {
            localStore.setQuery(api.cart.getCartbyId, { userId }, { ...cart, items: [] });
            }
        } catch (error) {
            toast.error('Error Emptying Cart. Pls Try Again')
            throw error
        } finally {
                setIsLoading(false)
            }
        }
        );
        return {clearCart, isLoading}
}
