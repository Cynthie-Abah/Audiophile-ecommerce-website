import CategoriesSection from "@/components/ui/categories-section";
import Image from "next/image";

export default function Home() {
  return (
    <section className="py-16 w-[1110px] mx-auto">
      
      <CategoriesSection />

      <div 
      className="categories relative mb-12 flex gap-7 justify-center items-center bg-primary w-full h-[560px] mx-auto rounded-md overflow-hidden"
      style={{ 
        backgroundImage: "url('/roundBg.png')",
        backgroundRepeat: "no-repeat",
      }}
      >

          <figure className="absolute img w-[730px] h-[760px] left-0 top-16 ">
          <Image
            fill
            className="object-contain"
            src={'/shared/desktop/image-category-thumbnail-speakers.png'}
            alt="Headphones category"
            quality={100}
            />
        </figure>

        <article className="ml-auto pr-10 text-white text-left">
          <h2 className="text-h1 font-bold uppercase mb-5 leading-none">ZX9 <br /> Speaker</h2>
          <p className="text-white/70 mb-6 max-w-sm pr-5">
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
          </p>
          <button className="bg-black text-white px-6 py-3 uppercase font-semibold text-sm tracking-wide">
            See Product
          </button>
        </article>
      </div>

      <div className="w-full">

      <div 
      className="mb-12 flex justify-start items-center h-80 rounded-md overflow-hidden"
      style={{ 
        backgroundImage: "url('/home/desktop/image-speaker-zx7.jpg')",
        backgroundRepeat: "no-repeat",
      }}
      >
        <article className=" p-5 px-24 text-black">
          <h2 className="text-3xl font-semibold uppercase mb-10 leading-none">ZX7 Speaker</h2>
          <button className="border border-black px-6 py-3 uppercase tracking-wide font-semibold text-sm">
            See Product
          </button>
        </article>

      </div>

      <div className="mb-12 flex gap-7 h-80 justify-between items-center w-full">

        <div 
        className="bg-pink-200 w-[540px] h-full rounded-md" 
        style={{
          backgroundImage: 'url(/home/desktop/image-earphones-yx1.jpg)',
          backgroundRepeat: "no-repeat",
          }}>

        </div>

        <div className="bg-gray-light w-[540px] h-full rounded-md p-5 px-24 text-black flex flex-col justify-center">
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
