import Summary from "@/components/checkout/summary";


// remove the state from here so it remains a server comp
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

            <Summary />

            </div> 
        {/* </div> */}

        
        
    </div>
  )
}

export default Page