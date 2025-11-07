import Product from "@/components/products/product";
import CategoriesSection from "@/components/ui/categories-section";

type props = {
  params: Promise<{ productId: string }>,
}

const page = async ({ params }: props) => {
  const { productId } = await params;
  console.log(productId);

  return (
    <div className='py-16 lg:max-w-[880px] xl:max-w-[1110px] mx-8 lg:mx-auto'>
      <button className="pb-10 md:p-10 text-black/50">Go Back</button>
      {productId && <Product slug={productId} />}
    </div>
  )
}

export default page