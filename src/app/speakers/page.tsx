"use client"
import CategoriesSection from "@/components/ui/categories-section"
import Spinner from "@/components/ui/spinner";
import { useProducts } from "@/hooks/useProducts";

import ProductSection from "@/components/ui/product-section";
import { useRouter } from "next/navigation";
// SPEAKERS
const Page = () => {
    const { products, isLoading, error } = useProducts();
    const router = useRouter();

    if (isLoading) return <Spinner />;
    if (error) return <p className="w-full h-screen flex justify-center items-center text-center py-10 text-red-500">{error}</p>;

    const speakers = products?.filter((product) => product.category === "speakers") || [];
    console.log(speakers);

  

  return (
    <div>
      { speakers && speakers.length > 0 ?
            speakers.map((speaker: any, index: number)=> {
              return <ProductSection product={speaker} key={speaker._id} reverse={index % 2 === 1}>
                <button onClick={()=> router.push(`/products/${speaker.slug}`)} className="bg-primary cursor-pointer text-white px-6 py-3 uppercase tracking-wide font-semibold text-sm">
                    See Product
                </button>
              </ProductSection>
            }) : 
      
            <div className="flex flex-col items-center justify-center h-32 bg-gray-light rounded-2xl shadow-sm text-gray-600 text-lg font-medium w-2xl my-16 mx-auto">
                No Speaker available
                </div>
          }

      <CategoriesSection />

    </div>
  )
}

export default Page