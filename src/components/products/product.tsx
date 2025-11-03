"use client"
import ProductSection from '../ui/product-section'
import QuantitySelector from '../ui/quantity-selector'
import { useSingleProduct } from '@/hooks/useSingleProduct'
import Spinner from '../ui/spinner'
import { useRouter } from 'next/navigation'
import ProductSectionMobile from '../ui/product-section-mobile'
import { useCallback, useMemo, useState } from 'react'
import { useAddCreateCart } from '@/hooks/cart/useAddCreateCart'

function Product({slug}: {slug: string}) {
    const router = useRouter();
      const {product, isLoading, error } = useSingleProduct(slug) 
      const [quantity, setQuantity] = useState<number>(0);

      const handleUpdateQuantity = (newQty: number) => {
        setQuantity(newQty)
      }

      const cartItem = useMemo(() => {
      if (!product || quantity <= 0) return null;
      return {
        slug: product.slug,
        name: product.name,
        price: product.price,
        quantity,
        image: product.image.desktop,
      };
    }, [product, quantity]);

      const {handleAddToCart, isloading} = useAddCreateCart()
    
        if (isLoading) return <Spinner />;
        if (error) return <p className="w-full h-screen flex justify-center items-center text-center py-10 text-red-500">{error}</p>;

        console.log(product);

  return (
    <>
    {
          product &&

          <>
          <div className='hidden md:block'>
            <ProductSection product={product} margin={'mt-0 mb-10 pr-0'}>
            <h3 className="text-lg">$ {product.price}</h3>
            <div className="flex items-center w-full space-x-4 py-8">
                {/* Quantity Selector */}
                <QuantitySelector quantity={quantity} limit={product.available} onChange={(newQuan: number)=> handleUpdateQuantity(newQuan)} />

                {/* Add to Cart Button */}
                <button onClick={()=> cartItem && handleAddToCart([cartItem])} disabled={isloading} className=" w-full px-6 py-3 bg-primary text-sm text-white font-semibold uppercase tracking-wide hover:bg-primary-light transition disabled:bg-primary-light">
                    {isloading ? 'Adding...':'Add to Cart'}
                </button>
            </div>
        </ProductSection>
          </div>
          
          <div className='block md:hidden'>
            <ProductSectionMobile product={product} margin={'mt-0 mb-10 pr-0'}>
            <h3 className="text-lg">$ {product.price}</h3>
            <div className="flex items-center space-x-4 py-8">
                {/* Quantity Selector */}
                <QuantitySelector quantity={quantity} limit={product.available} onChange={(newQuan: number)=> handleUpdateQuantity(newQuan)}  />

                {/* Add to Cart Button */}
                <button onClick={()=> cartItem && handleAddToCart([cartItem])} disabled={isloading} className="px-6 py-3 bg-primary text-white font-semibold uppercase tracking-wide hover:bg-primary-light transition disabled:bg-primary-light">
                    {isloading ? 'Adding...':'Add to Cart'}
                </button>
            </div>
        </ProductSectionMobile>
          </div>

        <div className="flex justify-center sm:justify-between flex-col md:flex-row mx-auto max-w-[1110px] sm:p-14 px-0 text-body leading-[25px] text-black/50">
            <div className="features sm:pr-10 flex-2">
              <h3 className="text-h3 py-8 text-black font-semibold">features</h3>
              <p className="font-normal pb-3">
                {product.features}</p>
            
            </div>

            <div className="content flex-1 sm:px-5 flex justify-between flex-wrap sm:mx-auto w-[90%] py-6">
              <h3 className="text-h3 py-8 text-black font-semibold">in the box</h3>
              <div className="flex justify-start gap-5">

                <div className="quantity-list text-primary font-semibold">
                    <ul>
                    {
                        product.includes && product.includes.map((quanList, index)=> {
                            return ( <li key={quanList.item + index}>{quanList.quantity}x</li>  )
                        })
                    }
                    </ul>
                </div>

                <div className="content-list">
                  <ul>
                    {
                        product.includes && product.includes.map((contentList, index)=> {
                            return ( <li key={contentList.item + index}>{contentList.item}</li>  )
                        })
                    }
                  </ul>
                </div>
              </div>
                
            </div>

        </div>

        <div className="gallery flex flex-wrap justify-center gap-8 w-full sm:max-w-[1000px] h-auto sm:mx-auto">
          <div className="w-full sm:w-[40%] flex flex-col gap-8">
            <figure className="w-full h-[290px] md:h-[292px] rounded-md overflow-hidden">
              <img
                src={product.gallery.first.desktop}
                alt="Gallery 1"
                className="w-full h-full object-cover"
              />
            </figure>

            <figure className="w-full h-[290px] md:h-[292px] rounded-md overflow-hidden">
              <img
                src={product.gallery.second.desktop}
                alt="Gallery 2"
                className="w-full h-full object-cover"
              />
            </figure>
          </div>

          <figure className="flex-2  rounded-md overflow-hidden">
            <img
              src={product.gallery.third.desktop}
              alt="Gallery 3"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>

        <div className=" others max-w-[1020px] mx-auto py-36 pb-15">
          <h3 className="text-center">you may also like</h3>
          <div className="w-full flex flex-wrap justify-between mt-16">

          {
            product.others && product.others.map((other, index)=> {
                return (
                <div key={other.slug} className="product w-full md:w-[30%] hover:scale-105 transition-transform duration-300">

                <figure className="img w-full h-[120px] sm:h-[300px] relative rounded-lg">
                    <img
                    src={other.image.mobile}
                    alt={other.name}
                    className="w-full h-full object-cover rounded-lg"
                    />
                </figure>

                <div className="text p-4 text-center">
                    <h4 className="font-semibold text-h6 my-4">{other.name}</h4>
                    <button onClick={()=> router.push(`/products/${other.slug}`)} className="my-4 px-6 py-3 bg-primary text-white font-semibold uppercase tracking-wide hover:bg-primary-light transition text-sm">
                            see product
                        </button>
                </div>

        </div>
                )
            })
          }
          </div>
        </div>
      
          </>

        }
    </>
  )
}

export default Product