import CategoriesSection from "@/components/ui/categories-section"
import Image from "next/image"

const Page = () => {
  return (
    <div>

       <div className="w-full flex justify-center items-center h-[588px] mt-48 mb-20 px-32">
              <div className="flex-1">
                  <figure className=" w-[540px] h-[560px] relative rounded-md">
                    <Image
                      fill
                      className=" object-cover rounded-md"
                      src={'/shared/desktop/image-xx99-mark-two-headphones.jpg'}
                      alt="Headphones category"
                      quality={100}
                      />
                  </figure>
                </div>

              <div className="flex-1 pl-28 ">
                <article className="w-9/12  my-auto">
                  <span className="text-primary uppercase text-sm tracking-[10px] block pb-4">new product</span>
                  <h3 className="font-semibold text-h2">XX99 Mark II Headphones</h3>
                  <p className="py-7 text-sm leading-6 text-black/50 font-normal">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                  <button className="bg-primary text-white px-6 py-3 uppercase tracking-wide font-semibold text-sm">
                    See Product
                  </button>
                </article>
              </div>
                
      </div>

       <div className="w-full flex justify-center items-center flex-row-reverse h-[588px] mt-48 mb-20 px-32">
              <div className="flex-1">
                  <figure className=" w-[540px] h-[560px] relative rounded-md">
                    <Image
                      fill
                      className=" object-cover rounded-md"
                      src={'/shared/desktop/image-xx99-mark-one-headphones.jpg'}
                      alt="Headphones category"
                      quality={100}
                      />
                  </figure>
                </div>

              <div className="flex-1 pl-28 ">
                <article className="w-9/12  my-auto">
                  <span className="text-primary uppercase text-sm tracking-[10px] block pb-4">new product</span>
                  <h3 className="font-semibold text-h2">XX99 Mark II Headphones</h3>
                  <p className="py-7 text-sm leading-6 text-black/50 font-normal">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                  <button className="bg-primary text-white px-6 py-3 uppercase tracking-wide font-semibold text-sm">
                    See Product
                  </button>
                </article>
              </div>
                
      </div>

       <div className="w-full flex justify-center items-center h-[588px] mt-48 mb-20 px-32">
              <div className="flex-1">
                  <figure className=" w-[540px] h-[560px] relative rounded-md">
                    <Image
                      fill
                      className=" object-cover rounded-md"
                      src={'/shared/desktop/image-xx59-headphones.jpg'}
                      alt="Headphones category"
                      quality={100}
                      />
                  </figure>
                </div>

              <div className="flex-1 pl-28 ">
                <article className="w-9/12  my-auto">
                  <span className="text-primary uppercase text-sm tracking-[10px] block pb-4">new product</span>
                  <h3 className="font-semibold text-h2">XX99 Mark II Headphones</h3>
                  <p className="py-7 text-sm leading-6 text-black/50 font-normal">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                  <button className="bg-primary text-white px-6 py-3 uppercase tracking-wide font-semibold text-sm">
                    See Product
                  </button>
                </article>
              </div>
                
      </div>

      <CategoriesSection />

    </div>
  )
}

export default Page