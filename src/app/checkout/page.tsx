import { CartItem } from "../../../types";
import { truncateText } from "@/libs/utils";

export const items: CartItem[] = [
  {
    productId: "1",
    name: "XX59 Headphones",
    price: 899,
    quantity: 1,
    image: "/assets/product-xx59-headphones/desktop/image-product.jpg",
  },
  {
    productId: "2",
    name: "XX99 Mark I Headphones",
    price: 1750,
    quantity: 2,
    image: "/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg",
  },
  {
    productId: "3",
    name: "XX99 Mark II Headphones",
    price: 2999,
    quantity: 1,
    image: "/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg",
  },
];

function Page() {
  return (
    <div className="bg-gray-light px-5 sm:px-10 md:px-5 lg:px-14 py-5 sm:py-10">
        <button className="py-5 md:py-10 text-black/50">Go Back</button>

        <div className="flex flex-col md:flex-row gap-7 sm:gap-4 md:gap-8 ">
            <div className="w-full md:max-w-4xl mx-auto space-y-8 bg-white flex-2 rounded-md p-6 md:p-5 lg:p-12">
            {/* Checkout Header */}
            <h1 className="tracking-wide text-h3 font-semibold">CHECKOUT</h1>

            {/* Billing Details */}
            <section className="space-y-4">
                <h2 className="text-subtitle font-semibold text-primary">Billing Details</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="flex flex-col">
                    <label className="text-[12px] font-semibold">Name</label>
                    <input
                    type="text"
                    placeholder="Alexei Ward"
                    className="placeholder:font-semibold placeholder:text-black/40 mt-1 p-3 md:p-5 border border-[#CFCFCF] rounded-md focus:ring-primary focus:border-primary outline-none"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-[12px] font-semibold">Email Address</label>
                    <input
                    type="email"
                    placeholder="alexei@mail.com"
                    className="placeholder:font-semibold placeholder:text-black/40 mt-1 p-3 md:p-5 border border-[#CFCFCF] rounded-md focus:ring-primary focus:border-primary outline-none"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-[12px] font-semibold">Phone Number</label>
                    <input
                    type="tel"
                    placeholder="+1 202-555-0136"
                    className="placeholder:font-semibold placeholder:text-black/40 mt-1 p-3 md:p-5 border border-[#CFCFCF] rounded-md focus:ring-primary focus:border-primary outline-none"
                    />
                </div>

                </div>

            </section>

            {/* Shipping Info */}
            <section className="space-y-4">
                <h2 className="text-subtitle font-semibold text-primary">Shipping Info</h2>

                <div className="flex flex-col">
                    <label className="text-[12px] font-semibold">Address</label>
                    <input
                    type="text"
                    placeholder="1137 Williams Avenue"
                    className=" placeholder:font-semibold placeholder:text-black/40 mt-1 p-3 md:p-5 border border-[#CFCFCF] rounded-md focus:ring-primary focus:border-primary outline-none"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="flex flex-col">
                    <label className="text-[12px] font-semibold">ZIP Code</label>
                    <input
                    type="text"
                    placeholder="10001"
                    className="placeholder:font-semibold placeholder:text-black/40 mt-1 p-3 md:p-5 border border-[#CFCFCF] rounded-md focus:ring-primary focus:border-primary outline-none"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-[12px] font-semibold">City</label>
                    <input
                    type="text"
                    placeholder="New York"
                    className="placeholder:font-semibold placeholder:text-black/40 mt-1 p-3 md:p-5 border border-[#CFCFCF] rounded-md focus:ring-primary focus:border-primary outline-none"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-[12px] font-semibold">Country</label>
                    <input
                    type="text"
                    placeholder="United States"
                    className="placeholder:font-semibold placeholder:text-black/40 mt-1 p-3 md:p-5 border border-[#CFCFCF] rounded-md focus:ring-primary focus:border-primary outline-none"
                    />
                </div>

                </div>
            </section>

            {/* Payment Details */}
            <section className="space-y-4">
                <h2 className="text-subtitle font-semibold text-primary">Payment Details</h2>
                {/* radio button */}
                <div className=" flex-col sm:flex-row md:items-center grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="text-[12px] font-semibold">Payment Method</label>
                <select className="p-3 border rounded-md focus:ring-primary focus:border-primary outline-none">
                    <option>e-Money</option>
                    <option>Cash on Delivery</option>
                </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                    <label className="text-[12px] font-semibold">e-Money Number</label>
                    <input
                    type="text"
                    placeholder="238521993"
                    className="placeholder:font-semibold placeholder:text-black/40 mt-1  p-3 md:p-5 border border-[#CFCFCF] rounded-md focus:ring-primary focus:border-primary outline-none"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-[12px] font-semibold">e-Money PIN</label>
                    <input
                    type="text"
                    placeholder="6891"
                    className="placeholder:font-semibold placeholder:text-black/40 mt-1  p-3 md:p-5 border border-[#CFCFCF] rounded-md focus:ring-primary focus:border-primary outline-none"
                    />
                </div>
                </div>
            </section>
            </div>

            <div className="w-full md:max-w-md p-6 h-fit space-y-6 bg-white flex-1 mb-10 rounded-md">
                {/* Summary Header */}
                <h2 className="text-lg font-semibold tracking-wide uppercase">Summary</h2>

                {/* Cart Items */}
                <div className="space-y-4">
                    {items.length === 0 ? (
                              <div className="text-center py-10 text-gray-500">Your cart is empty</div>
                            ) : (
                              <div className="space-y-6 lg:max-h-100 overflow-y-auto">
                                {items.map((item) => (
                                  <div key={item.productId} className="flex items-center justify-between">
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
                    <span className="font-bold text-h6">$5,396</span>
                    </div>
                    <div className="flex justify-between items-center pb-4">
                    <span className="text-black/50 text-body">Shipping</span>
                    <span className="font-bold text-h6">$50</span>
                    </div>
                    <div className="flex justify-between items-center pb-4">
                    <span className="text-black/50 text-body">VAT (Included)</span>
                    <span className=" text-h6 font-bold">$1,079</span>
                    </div>
                    <div className="flex justify-between items-center">
                    <span className="text-black/50 text-body">Grand Total</span>
                    <span className="text-primary font-bold text-h6">$5,446</span>
                    </div>
                </div>

                {/* Pay Button */}
                <button className="w-full bg-primary text-white py-4 text-subtitle uppercase tracking-wide font-bold hover:bg-primary-dark transition">
                    Continue & Pay
                </button>
            </div>

            </div> 
        {/* </div> */}

        
        
    </div>
  )
}

export default Page