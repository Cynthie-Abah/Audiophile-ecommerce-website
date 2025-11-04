import { Product } from "../../../types"
import { ReactNode } from "react";


function ProductSectionMobile({ product, reverse = false, children, margin = 'mt-16 sm:mt-28 md:mt-48 mb-10 sm:mb-20' }: { product: Product, reverse?: boolean, children: ReactNode, margin?: String }) {
  if (!product) return null;
  return (

    <div key={product._id} className={`sm:flex-row h-[780px] sm:h-[588px] w-full mx-auto flex flex-col items-center justify-center ${margin} ${reverse ? 'sm:flex-row-reverse' : ''}`}>
      <div className="flex-1 w-full mb-6 sm:mb-0 h-[227px] sm:h-full rounded-md text-black flex flex-col justify-center bg-gray-light bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${product.image.desktop})` }}>
      </div>

      <div className={`flex-1 w-full ${reverse ? 'pr-20' : 'sm:pl-20'}`}>
        <article className="w-full my-auto">
          <span className="text-primary uppercase text-sm tracking-[10px] block pb-2 sm:pb-4">{product.new && 'new product'}</span>
          <h3 className="font-semibold text-h4 sm:text-h3">{product.name}</h3>
          <p className="py-5 text-sm leading-6 text-black/50 font-normal">{product.description}</p>
          {children}
        </article>
      </div>

    </div>


  )
}

export default ProductSectionMobile