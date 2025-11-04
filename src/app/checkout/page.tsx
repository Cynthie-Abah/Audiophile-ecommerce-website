"use client"
import { CheckoutForm } from "@/components/checkout/checkout-form";
import Spinner from "@/components/ui/spinner";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

function Page() {
  const router = useRouter();

  return (
    <div className="bg-gray-light px-5 sm:px-10 md:px-5 lg:px-14 py-5 sm:py-10">
        <button onClick={()=> router.back()} className="py-5 md:py-10 text-black/50">Go Back</button>

        <div className="flex flex-col md:flex-row gap-7 sm:gap-4 md:gap-8 ">

           <Suspense fallback={<Spinner />}><CheckoutForm /></Suspense>

            </div>  
        
    </div>
  )
}

export default Page