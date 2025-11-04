import Image from "next/image"
import { Product } from "../../../types"
import { ReactNode } from "react";


function ProductSection({ product, reverse = false, children, margin = 'mt-28 md:mt-48 mb-20' }: { product: Product, reverse?: boolean, children: ReactNode, margin?: String }) {
  if (!product) return null;

  return (

    <div key={product._id} className={`flex justify-center flex-col md:flex-row items-center md:h-[588px] ${margin}  w-full mx-auto px-6 ${reverse && 'flex-col md:flex-row-reverse mx-10 md:mx-auto'}`}>
      <div className="flex-1 w-full max-w-[540px]">
        <figure className=" md:w-full bg-gray-light h-[350px] md:h-[560px] relative rounded-md">
          <Image
            fill
            className=" object-contain rounded-md"
            src={product.image.desktop}
            alt={product.name}
          />
        </figure>
      </div>

      <div className={`flex-1 w-full pt-10 md:pt-0 text-center md:text-left md:w-full max-w-[540px] ${reverse ? 'md:pr-32' : 'md:pl-32'}`}>
        <article className="w-full my-auto">
          <span className="text-primary uppercase text-sm tracking-[10px] block pb-4">{product.new && 'new product'}</span>
          <h3 className="font-semibold text-h4 sm:text-h2 w-[75%] md:w-full mx-auto md:mx-0">{product.name}</h3>
          <p className="py-7 text-sm leading-6 text-black/50 font-normal">{product.description}</p>

          {children}
        </article>
      </div>

    </div>


  )
}

export default ProductSection