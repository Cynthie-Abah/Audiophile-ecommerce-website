"use client"
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Hero = () => {
  const pathname = usePathname();
  const router  = useRouter();
  return (
<>

  { pathname === '/' ? <>

    <motion.section 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: .8, ease: "easeOut" }}
      className="md:flex flex-col md:flex-row-reverse relative md:static items-center justify-center md:justify-between text-white mx-auto md:pt-0 xl:max-w-[1110px] flex px-6 md:px-10 h-screen">
      {/* Mobile Background Image */}
      <motion.div className="absolute inset-0 md:hidden">
        <Image
          src="/headphones.png"
          alt="Headphones"
          fill
          priority
          quality={90}
          className="object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Desktop Image Section */}
      <motion.div 
       initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className="md:w-1/2 relative w-full h-full min-h-[700px] hidden md:flex items-center justify-center">
        <Image
          src="/headphones.png"
          alt="Headphones"
          className="object-contain"
          fill
          quality={90}
          priority
        />
      </motion.div>

      {/* Text Section */}
      <motion.article 
      initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      className="relative z-10 lg:w-1/2 md:pr-8 flex flex-col items-center md:items-start gap-6 text-center md:text-left mx-auto">
        <p className="text-white/50 text-sm tracking-[10px] uppercase">
          NEW PRODUCT
        </p>

        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-tight">
          XX99 Mark II <br /> Headphones
        </h3>

        <p className="text-sm sm:text-base text-white/70 max-w-md mx-auto md:mx-0 w-5/6 leading-loose sm:leading-normal">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>

        <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={()=> router.push(`/products/xx99-mark-two-headphones`)} 
        className="mt-8 cursor-pointer bg-primary text-white px-6 py-3 uppercase tracking-widest text-sm hover:bg-primary-light transition">
          See Product
        </motion.button>
      </motion.article>
    </motion.section>

    </> : pathname === '/headphones' || pathname === '/speakers' || pathname === '/earphones' ?

    <div className="uppercase h-60 sm:h-80 flex justify-center items-end pb-14 sm:pb-20">
      <h2 className="font-semibold text-3xl sm:text-h2">{pathname.slice(1)}</h2>
    </div> : null

  }
</>

  )
}

export default Hero