import Link from "next/link"
import Logo from "../ui/logo"
import Image from "next/image"

function Header() {
return (
    <header className='absolute top-0 left-1/2 -translate-x-1/2 flex justify-between items-center py-2 text-white w-[1110px] mx-auto border-b border-b-white/20 z-30'>
        <Logo />

        <nav className="nav">
            <ul className="flex uppercase gap-10 font-semibold text-sm tracking-[2px]">
                <li><Link href={'/'} className="hover:text-primary cursor-pointer">home</Link></li>
                <li><Link href={'/headphones'} className="hover:text-primary cursor-pointer">headphones</Link></li>
                <li><Link href={'/speakers'} className="hover:text-primary cursor-pointer">speakers</Link></li>
                <li><Link href={'/earphones'} className="hover:text-primary cursor-pointer">earphones</Link></li>
            </ul>
        </nav>

        <nav className="cart relative w-6 h-6 transition-all ">
            <Link href={'/cart'} ><Image alt="carts-icon" src={'/carts.svg'} fill sizes="100%" /></Link>
        </nav>

    </header>
)
}

export default Header