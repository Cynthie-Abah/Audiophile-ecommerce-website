"use client"
import { truncateText } from "@/libs/utils";
import { Cart } from "../../../types";

function Summary({cart, tax, shipping, isSubmitting}: {cart: Cart, isSubmitting: boolean, tax: number, shipping: number}) {
  const total = cart?.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const grandTotal = total && total + shipping
  return (
    <div className="w-full md:max-w-md p-6 h-fit space-y-6 bg-white flex-1 mb-10 rounded-md">
                {/* Summary Header */}
                <h2 className="text-lg font-semibold tracking-wide uppercase">Summary</h2>

                {/* Cart Items */}
                <div className="space-y-4">
                    {cart?.items.length === 0 ? (
                              <div className="text-center py-10 text-gray-500">Your cart is empty</div>
                            ) : (
                              <div className="space-y-6 lg:max-h-100 overflow-y-auto">
                                {cart?.items.map((item) => (
                                  <div key={item.slug} className="flex items-center justify-between">
                                    <img
                                      src={item.image}
                                      alt={item.name}
                                      className="w-16 h-16 rounded-md object-cover"
                                    />
                    
                                    <div className="flex-1 px-4">
                                      <h4 className=" text-body font-semibold leading-normal pb-2">{truncateText(item.name, 17)}</h4>
                                      <p className="text-black/50 font-bold text-overline">
                                        ${item.price} 
                                      </p>
                                    </div>
                                        
                                        <span className="text-body text-black/50 font-bold">x{item.quantity}</span>
                                    
                                  </div>
                                ))}
                              </div>
                            )}
                </div>

                {/* Totals */}
                <div className="space-y-2 uppercase">
                    <div className="flex justify-between items-center pb-4">
                    <span className="text-black/50 text-body">Total</span>
                    <span className="font-bold text-h6">$ {total}</span>
                    </div>
                    <div className="flex justify-between items-center pb-4">
                    <span className="text-black/50 text-body">Shipping</span>
                    <span className="font-bold text-h6">$ {shipping}</span>
                    </div>
                    <div className="flex justify-between items-center pb-4">
                    <span className="text-black/50 text-body">VAT (Included)</span>
                    <span className=" text-h6 font-bold">$ {tax}</span>
                    </div>
                    <div className="flex justify-between items-center">
                    <span className="text-black/50 text-body">Grand Total</span>
                    <span className="text-primary font-bold text-h6">$ {grandTotal}</span>
                    </div>
                </div>

                {/* Pay Button */}
                <button type="submit" disabled={isSubmitting} form="checkout-form" className="disabled:bg-primary-light cursor-pointer w-full bg-primary hover:bg-primary-light text-white py-4 text-subtitle uppercase tracking-wide font-bold hover:bg-primary-dark transition">
                   {isSubmitting ? 'Submitting...' : 'Continue & Pay'}
                </button>
            </div>
  )
}

export default Summary