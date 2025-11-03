"use client"
import QuantitySelector from "@/components/ui/quantity-selector";
import { truncateText } from "@/libs/utils";
import { useRouter } from "next/navigation";
import { useProducts } from "@/hooks/useProducts";
import { useCart } from "@/hooks/cart/useCart";
import Spinner from "@/components/ui/spinner";
import { useUpdateCart } from "@/hooks/cart/useUpdateCart";
import { useEffect, useState } from "react";

export default function Page() {
    const router = useRouter()
    // const userId = localStorage.getItem("userId")
    const { cart, isLoading, error } = useCart();
    const {products, isLoading: isfetching} = useProducts()
    const {updateItem} = useUpdateCart();

    const [userId, setUserId] = useState<string | null>(null);
    
      useEffect(() => {
        // Runs only in the browser
        if (typeof window !== "undefined") {
          const id = localStorage.getItem("userId");
          setUserId(id);
        }
      }, []);

  const handleUpdateQuantity = (newQty: number, slug: string) => {
    if (userId) {
      updateItem({ userId, slug, quantity: newQty })
    }
};

    if (isLoading || isfetching) return <Spinner />;
    if (error) return <p className="w-full h-[75vh] flex justify-center items-center text-center py-10 text-red-500">{error}</p>;

    const total = cart?.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className=" w-screen fixed inset-0 z-50 flex items-start justify-content sm:justify-end bg-black/50 pt-24 px-5 md:px-10 md:p-10 overflow-hidden">
      <div className="bg-white rounded-lg shadow-lg w-full sm:max-w-sm md:max-w-md p-8 px-5 sm:px-8 relative">

        <button
          className="absolute top-2 left-4 text-gray-400 hover:text-gray-600 text-xl font-bold"
          onClick={()=> router.back()}
        >
          &times;
        </button>

        <div className="flex justify-between mb-4">
            <h2 className="text-lg font-semibold">Cart ({cart?.items.length})</h2> 
            <button className="underline text-black/50">Remove all</button>
        </div>
        
        {cart?.items.length === 0 ? (
          <div className="text-center py-10 text-gray-500">Your cart is empty</div>
        ) : (
          <div className="space-y-6 max-h-100 overflow-y-auto">
            {cart?.items.map((item) => {
            return (
              
              <div key={item.slug} className="flex items-center justify-between">
                {/* <button className="text-red-500 font-bold p-1 sm:p-2 cursor-pointer">&times;</button> */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-md object-cover"
                />

                <div className="flex-1 px-4">
                  <h4 className=" text-body font-semibold leading-normal pb-2">{truncateText(item.name, 12)}</h4>
                  <p className="text-gray-500 text-sm font-semibold">
                    ${item.price}
                  </p>
                </div>
                    
                    <div className="">
                      <QuantitySelector 
                      quantity={item.quantity} 
                      limit={products?.find(product => product.slug === item.slug)?.available ?? 0} 
                      onChange={(newQty) => handleUpdateQuantity(newQty, item.slug)}  />
                    </div>
                  
                
              </div>
            )}
            )}
          </div>
        )}

        {cart?.items && cart?.items.length > 0 && (
          <div className="mt-6">
            <div className="flex justify-between font-semibold text-lg mb-4">
              <span>Total</span>
              <span>$ {total}</span>
            </div>
            <button className="w-full bg-primary text-white py-3 font-semibold uppercase hover:bg-primary-light transition">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
