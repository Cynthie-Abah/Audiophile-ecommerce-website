"use client"
import CategoriesSection from "@/components/ui/categories-section"
import ProductSection from "@/components/ui/product-section";
import Spinner from "@/components/ui/spinner";
import { useProducts } from "@/hooks/useProducts";
import { useRouter } from "next/navigation";
// earphone
const Page = () => {
  const { products, isLoading, error } = useProducts();
  const router = useRouter();

  if (isLoading) return <Spinner />;
      if (error) return <p className="w-full h-screen flex justify-center items-center text-center py-10 text-red-500">{error}</p>;

  const earphones = products?.filter((product) => product.category === "earphones");
  console.log(earphones);
  

  return (
    <div>
       { earphones && earphones.length > 0 ?
                  earphones.map((earphone: any, index: number)=> {
                    return( 
                  <ProductSection product={earphone} key={earphone._id} reverse={index % 2 === 1}>
                    <button onClick={()=> router.push(`/products/${earphone.slug}`)} className="bg-primary cursor-pointer text-white px-6 py-3 uppercase tracking-wide font-semibold text-sm">
                        See Product
                    </button>
                  </ProductSection>
              )
                  }) : 
            
                  <div className="flex flex-col items-center justify-center h-32 bg-gray-light rounded-2xl shadow-sm text-gray-600 text-lg font-medium w-2xl my-16 mx-auto">
                      No Earphone available
                      </div>
                }

      <CategoriesSection />

    </div>
  )
}

export default Page