import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export const useOrder = (orderId: string) => {
    try {
        console.log(orderId);
        const order = useQuery(api.orders.getOrderById, { orderId })

        const isLoading = order === undefined;
        const error = order === null ? "Failed to fetch order info" : null;
        return { order, isLoading, error };
    } catch (error) {
        throw error;
    }


};
