import { CheckoutForm } from "@/components/checkout/checkout-form";

function Page() {

  return (
    <div className="bg-gray-light px-5 sm:px-10 md:px-5 lg:px-14 py-5 sm:py-10">
        <button className="py-5 md:py-10 text-black/50">Go Back</button>

        <div className="flex flex-col md:flex-row gap-7 sm:gap-4 md:gap-8 ">

            <CheckoutForm />

            </div>  
        
    </div>
  )
}

export default Page