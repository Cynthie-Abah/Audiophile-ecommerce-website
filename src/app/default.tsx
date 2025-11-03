import CategoriesSection from "@/components/ui/categories-section";
import Image from "next/image";

export default function Home() {
  return (
    <section className="py-16 lg:w-[880px] xl:w-[1110px] mx-1 sm:mx-5 xl:mx-auto">

      <div className="pt-18"><CategoriesSection /></div>

      <div 
      className="categories relative mb-6 mt-6 md:mb-12 flex gap-7 flex-col md:flex-row justify-end md:justify-center items-center bg-primary md:w-full h-[650px] md:h-[560px] mx-2 sm:mx-5 md:mx-auto rounded-md overflow-hidden"
      style={{ 
        backgroundImage: "url('/roundBg.png')",
        backgroundRepeat: "no-repeat",
      }}
      >

          <figure className="absolute img w-[300px] h-80 md:w-[730px] md:h-[760px] md:left-0 md:top-16 top-5 ">
          <Image
            fill
            className="object-contain"
            src={'/shared/desktop/image-category-thumbnail-speakers.png'}
            alt="Headphones category"
            quality={100}
            />
        </figure>

        <article className="md:ml-auto md:pr-10 text-white text-center md:text-left pb-20 md:pb-0">
          <h2 className="text-h1 font-bold uppercase mb-5 leading-none">ZX9 <br /> Speaker</h2>
          <p className="text-white/70 mb-6 max-w-sm pr-5">
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
          </p>
          <button className="bg-black text-white px-6 py-3 uppercase font-semibold text-sm tracking-wide">
            See Product
          </button>
        </article>
      </div>

      <div className="md:w-full mx-5 md:mx-auto">

      <div 
      className="mb-6 md:mb-12 flex justify-start items-center h-80 rounded-md overflow-hidden"
      style={{ 
        backgroundImage: "url('/home/desktop/image-speaker-zx7.jpg')",
        backgroundRepeat: "no-repeat",
      }}
      >
        <article className="p-5 px-16 sm:px-24 text-black">
          <h2 className="text-3xl font-semibold uppercase mb-10 leading-none">ZX7 Speaker</h2>
          <button className="border border-black px-6 py-3 uppercase tracking-wide font-semibold text-sm">
            See Product
          </button>
        </article>

      </div>

      <div className="mb-6 md:mb-12 flex flex-col sm:flex-row gap-5 md:gap-7 h-[500px] justify-between items-center w-full">

        <div 
        className="bg-gray-light w-full md:w-[540px] h-full rounded-md p-5 px-24 text-black flex flex-col justify-center" 
        style={{
          backgroundImage: 'url(/home/desktop/image-earphones-yx1.jpg)',
          backgroundRepeat: "no-repeat",
          }}>

        </div>

        <div className="bg-gray-light w-full md:w-[540px] h-full rounded-md p-5 px-24 text-black flex flex-col justify-center">
          <article>
            <h2 className="text-3xl font-semibold uppercase mb-10 leading-none">YX1 EARPHONES</h2>
          <button className="border border-black px-6 py-3 uppercase tracking-wide font-semibold text-sm">
            See Product
          </button>
          </article>
          
        </div>

      </div>

      </div>

    </section>
  );
}
