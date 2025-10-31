import Image from "next/image"
import Logo from "../ui/logo"

export const Footer = () => {
  return (
    <>
        <div className="w-[1110px] mx-auto flex justify-between rounded-md h-[588px] mt-48 mb-20">
            <div className="flex-1 my-auto">
            <article className="text w-9/12">
                <h3 className="font-semibold">Bringing you the <br /><span className="text-primary">best</span> audio gear</h3>
                <p className="py-7 text-sm leading-6 text-black/50 font-normal">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </article>
            </div>
            
            <figure className="img w-full flex-1 relative rounded-md">
                <Image
                fill
                className=" object-cover rounded-md"
                src={'/man.png'}
                alt="Headphones category"
                quality={100}
                />
            </figure>
        </div>

        <footer className="pb-16 text-white">
                <div className="bg-bg-dark">
                    <span className="h-1 w-[101px] bg-primary block ml-40"></span>
                    <div className="p-12 px-40 flex justify-between gap-10">

                        <div className="left w-[45%] flex flex-col justify-center">
                            <Logo />
                            <p className="text-white/50 font-normal pb-12 text-sm">
                                Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
                            </p>
                            <span className="text-white/50 font-normal pb-12 text-sm">Copyright 2021. All Rights Reserved</span>
                        </div>

                        <div className="right w-[45%] flex flex-col justify-between h-full">
                            <nav className="py-5">
                                <ul className="flex justify-between uppercase text-sm font-semibold">
                                    <li>Home</li>
                                    <li>headphones</li>
                                    <li>speakers</li>
                                    <li>earphones</li>
                                </ul>
                            </nav>

                            <nav>
                                <ul className="flex justify-end gap-5 pt-20">
                                    <li><img src={'/shared/desktop/icon-facebook.svg'} alt=""/></li>
                                    <li><img src={'/shared/desktop/icon-twitter.svg'} alt=""/></li>
                                    <li><img src={'/shared/desktop/icon-instagram.svg'} alt=""/></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
        </footer>
    </>
    
  )
}
