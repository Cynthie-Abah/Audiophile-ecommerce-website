"use client"
import { use, useState } from "react";
import Link from "next/link";
import Logo from "../ui/logo";
import Image from "next/image";
import CategoriesSection from "../ui/categories-section";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCart } from "@/hooks/cart/useCart";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter();
  const {cart, isLoading, error} = useCart();

  const handleOpenCart = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('view', 'cart')
    router.push(pathname + '?' + params.toString())
  }

  return (
    <>
      <header className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-3xl lg:w-[980px] xl:w-[1110px] hidden md:flex justify-between items-center py-0 md:py-2 px-6 text-white border-b border-b-white/20 z-30">
        <div className="flex justify-evenly gap-10 items-center">
          {/* tab and mobile - hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-6 h-6 md:hidden"
          >
            {menuOpen ? 'X' : (
              <Image
                alt="hamburger-icon"
                src="/shared/tablet/icon-hamburger.svg"
                fill
                className="object-contain"
              />
            )}
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
          <button onClick={handleOpenCart}>
            <Image alt="carts-icon" src={'/carts.svg'} fill sizes="100%" />
            {
          cart && cart.items.length > 0 && (
            <span className=" absolute -top-2 -right-2 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold z-50 ">
              {cart.items.length}
            </span>
          )
        }
            </button>
        </nav>

      </header>

      <header className=" md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-3xl lg:w-[980px] xl:w-[1110px] text-white z-30">
      <div className=" flex justify-between items-center py-0 md:py-2 px-6 text-white border-b border-b-white/20">
        <div className="flex justify-evenly gap-10 items-center">
          {/* tab and mobile - hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-6 h-6 md:hidden"
          >
            {/* {menuOpen ? 'X' : ( */}
              <Image
                alt="hamburger-icon"
                src="/shared/tablet/icon-hamburger.svg"
                fill
                className="object-contain"
              />
            {/* )} */}
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
          <button onClick={handleOpenCart}><Image alt="carts-icon" src={'/carts.svg'} fill sizes="100%" /></button>
        </nav>
      </div>
        
             {/* Mobile Navigation */}
      {menuOpen && (
        <div className=" w-screen inset-0 z-50 flex items-start justify-center sm:justify-end bg-black/50 shadow-2xl md:hidden overflow-scroll top-20">
          <nav className="w-full h-fit bg-white pt-16 md:pt-0 rounded-b-md ">
            <CategoriesSection />
          </nav>

        </div>

      )}
      </header>
    </>
  );
}

export default Header;
