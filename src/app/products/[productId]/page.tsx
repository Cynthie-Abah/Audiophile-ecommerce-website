import Product from "@/components/products/product";
import CategoriesSection from "@/components/ui/categories-section";

type props = {
  params: Promise<{ productId: string }>,
}

const page = async ({ params }: props) => {
  const { productId } = await params;
  console.log(productId);

  return (
    <div className='md:px-20 lg:px-28 pt-5 px-4 md:p-10 pb-0 '>
      <button className="pb-10 md:p-10 text-black/50">Go Back</button>
      {productId && <Product slug={productId} />}

      <CategoriesSection />
    </div>
  )
}

export default page