"use client"
import Image from "next/image";
import { usePathname } from "next/navigation";

const Hero = () => {
  const pathname = usePathname();
  return (
<>

  { pathname === '/' ? 
    <section className="w-[1110px] flex flex-col md:flex-row items-center justify-between text-white mx-auto">
      {/* Text Section */}
    <article className="pr-8 text-center md:text-left ">
      <p className="text-white/50 text-sm tracking-[10px] uppercase">
        NEW PRODUCT
      </p>
      <h3 className="text-h1 md:text-6xl font-bold uppercase leading-tight">
        XX99 Mark II <br /> Headphones
      </h3>
      <p className="text-white/70 max-w-md mx-auto md:mx-0 w-5/6">
        Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
      </p>
      <button className="mt-8 bg-primary  text-white px-6 py-3 uppercase tracking-widest text-sm hover:bg-primary-light transition">
        See Product
      </button>
    </article>

    {/* Image Section */}
    <div className=" relative w-full h-full min-h-[700px] flex items-center justify-center">
      <Image
        src="/headphones.png"
        alt="Headphones"
        className="object-contain w-full h-full"
        fill
        quality={80}
      />
    </div>
    </section> : 
    <div className="uppercase h-80 flex justify-center items-end pb-20">
      <h2 className="font-semibold text4xl">{pathname.slice(1, -1)}</h2>
    </div>

  }
</>

  )
}

export default Hero