"use client"
import QuantitySelector from "@/components/ui/quantity-selector";
import { truncateText } from "@/libs/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useProducts } from "@/hooks/useProducts";
import { useCart } from "@/hooks/cart/useCart";
import Spinner from "@/components/ui/spinner";
import { useUpdateCart } from "@/hooks/cart/useUpdateCart";
import { useEffect, useState } from "react";
import { useClearCart } from "@/hooks/cart/useClearCart";
import { motion } from "motion/react"



export default function CartModal() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const view = searchParams.get("view");
  const isOpen = view === "cart";

  const closeModal = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("view");
    router.push(`${pathname}?${params.toString()}`);
  };
  const { cart, isLoading, error } = useCart();
  const { clearCart } = useClearCart();
  const { products, isLoading: isfetching } = useProducts()
  const { updateItem } = useUpdateCart();

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

  if ((isLoading || isfetching) && isOpen) return <div className="w-screen fixed inset-0 z-50 flex items-start justify-content sm:justify-end bg-black/50 pt-24 px-5 md:px-10 md:p-10 overflow-hidden" ><Spinner /></div>;
  if (error && isOpen) return <div className="w-screen fixed inset-0 z-50 flex items-start justify-content sm:justify-end bg-black/50 pt-24 px-5 md:px-10 md:p-10 overflow-hidden">
    <p className="w-full h-[75vh] flex justify-center items-center text-center py-10 text-red-500">{error}</p>
  </div>;

  const total = cart?.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {isOpen &&
  //       <motion.div initial={{ opacity: 0, y: 10 }}
  // animate={{ opacity: 1, y: 0 }}
  // transition={{ duration: 0.4 }} className=" w-screen fixed inset-0 z-50 flex items-start justify-center sm:justify-end bg-black/50 pt-24 px-5 md:px-10 md:p-10 overflow-hidden">
         <div className=" w-screen fixed inset-0 z-50 flex items-start justify-center sm:justify-end bg-black/50 pt-24 px-5 md:px-10 md:p-10 overflow-hidden"> 
          <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }} 
          className="bg-white rounded-lg shadow-lg w-full sm:max-w-sm md:max-w-md p-8 px-5 sm:px-8 relative">

            <button
              className="absolute top-2 left-4 text-gray-400 hover:text-gray-600 text-xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>

            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-semibold">Cart ({cart?.items.length})</h2>
              <button onClick={() => clearCart({ userId: userId ?? '' })} className="underline text-black/50">Remove all</button>
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
                          onChange={(newQty) => handleUpdateQuantity(newQty, item.slug)} />
                      </div>


                    </div>
                  )
                }
                )}
              </div>
            )}

            {cart?.items && cart?.items.length > 0 && (
              <div className="mt-6">
                <div className="flex justify-between font-semibold text-lg mb-4">
                  <span>Total</span>
                  <span>$ {total}</span>
                </div>
                <button onClick={() => router.push('/checkout')} className="cursor-pointer w-full bg-primary text-white py-3 font-semibold uppercase hover:bg-primary-light transition">
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </div>}
    </>
  );
}
