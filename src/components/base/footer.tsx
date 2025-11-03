"use client"
import Image from "next/image"
import Logo from "../ui/logo"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const Footer = () => {
    const pathname = usePathname();
  return (
    <>
    { pathname !== '/checkout' &&

    <div className=" w-full md:w-3xl xl:w-[1110px] mx-auto flex justify-between flex-col-reverse md:flex-row rounded-md h-[588px] mt-20 md:mt-10 mb-20 px-4">
            <div className="flex-1 my-auto">
            <article className="text w-full md:w-9/12">
                <h3 className="font-semibold hidden md:block">Bringing you the <br /><span className="text-primary">best</span> audio gear</h3>
                <h3 className="font-semibold block md:hidden px-10 pt-10 text-center">Bringing you the <span className="text-primary">best</span> audio gear</h3>
                <p className="py-7 text-sm leading-6 text-black/50 font-normal text-center md:text-left">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </article>
            </div>
            
            <figure className="img w-full flex-1 relative rounded-md">
                <Image
                fill
                className="object-cover rounded-md"
                src={'/man.png'}
                alt="Headphones category"
                quality={100}
                />
            </figure>
    </div>

    }
        
        <footer className={`${pathname === '/' && 'md:pb-16'} text-white`}>
                <div className="bg-bg-dark">
                    <span className="h-1 w-[100px] bg-primary block mx-auto sm:ml-10 md:ml-40"></span>

                    <div className="p-5 md:p-12 px-10 md:px-40 flex justify-between flex-col md:flex-row gap-10">

                        <div className="left w-full md:w-[45%] flex flex-col justify-center items-center">
                            <Logo />

                            <nav className="pb-10 block md:hidden">
                                <ul className="flex justify-start items-center flex-col sm:flex-row gap-7 sm:gap-15 uppercase text-sm font-semibold">
                                    <li><Link href={'/'} className="hover:text-primary cursor-pointer">Home</Link></li>
                                    <li><Link className="hover:text-primary cursor-pointer" href={'/headphones'}>headphones</Link></li>
                                    <li><Link className="hover:text-primary cursor-pointer" href={'/speakers'}>speakers</Link></li>
                                    <li><Link className="hover:text-primary cursor-pointer" href={'/earphones'}>earphones</Link></li>
                                </ul>
                            </nav>

                            <p className="text-white/50 font-normal pb-12 text-sm text-center sm:text-left leading-loose sm:leading-normal">
                                Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
                            </p>
                            <div className="flex md:block justify-between items-center flex-col sm:flex-row gap-7 pb-8">
                                <span className="text-white/50 font-normal text-sm">Copyright 2021. All Rights Reserved</span>
                                
                                <nav className="block md:hidden">
                                <ul className="flex justify-end gap-5">
                                    <li><img src={'/shared/desktop/icon-facebook.svg'} alt=""/></li>
                                    <li><img src={'/shared/desktop/icon-twitter.svg'} alt=""/></li>
                                    <li><img src={'/shared/desktop/icon-instagram.svg'} alt=""/></li>
                                </ul>
                            </nav>
                            </div>
                            
                        </div>

                        {/*  above tablet screen  */}
                        <div className="right hidden md:flex w-[45%] flex-col justify-between h-full">
                            <nav className="py-5">
                                <ul className="flex justify-between uppercase text-sm font-semibold gap-5">
                                    <li><Link href={'/'} className="hover:text-primary cursor-pointer">Home</Link></li>
                                    <li><Link className="hover:text-primary cursor-pointer" href={'/headphones'}>headphones</Link></li>
                                    <li><Link className="hover:text-primary cursor-pointer" href={'/speakers'}>speakers</Link></li>
                                    <li><Link className="hover:text-primary cursor-pointer" href={'/earphones'}>earphones</Link></li>
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
