
"use client"
import { useState } from "react";
import Link from "next/link";
import Logo from "../ui/logo";
import Image from "next/image";
import CategoriesSection from "../ui/categories-section";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <header className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-3xl lg:w-[980px] xl:w-[1110px] flex justify-between items-center py-0 md:py-4 px-6 text-white border-b border-b-white/20 z-30">
        <div className="flex justify-evenly gap-10 items-center">
            {/* tab and mobile - hamburger */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="relative w-4 sm:w-6 h-4 md:h-6 md:hidden font-black text-4rem">
                {menuOpen ? 'X' : <Image alt="cart-icon" src="/shared/tablet/icon-hamburger.svg" fill sizes="100%" />}
            </button>

            <Logo />
        </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <ul className="flex uppercase gap-5 lg:gap-10 font-semibold text-sm tracking-[2px]">
          <li>
            <Link href="/" className="hover:text-primary cursor-pointer">home</Link>
          </li>
          <li>
            <Link href="/headphones" className="hover:text-primary cursor-pointer">headphones</Link>
          </li>
          <li>
            <Link href="/speakers" className="hover:text-primary cursor-pointer">speakers</Link>
          </li>
          <li>
            <Link href="/earphones" className="hover:text-primary cursor-pointer">earphones</Link>
          </li>
        </ul>
      </nav>
        {/* cart btn */}
       <nav className="cart relative w-6 h-6 transition-all">
             <Link href={'/cart'} ><Image alt="carts-icon" src={'/carts.svg'} fill sizes="100%" /></Link>
        </nav>

    </header>

     {/* Mobile Navigation */}
      {menuOpen && (
        <div className=" w-screen fixed inset-0 z-3000 flex items-start justify-content sm:justify-end bg-black/50 shadow-2xl md:hidden overflow-scroll top-20 left-0 ">
          <nav className="w-full h-fit bg-white pt-16 md:pt-0 rounded-b-md ">
            <CategoriesSection />
          </nav>

        </div>
        
      )}
    </>
  );
}

export default Header;
