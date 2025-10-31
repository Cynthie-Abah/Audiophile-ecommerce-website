import Image from 'next/image';
import Link from 'next/link';


export default function Logo() {

return (
    <Link href="/" className="no-underline">
        <div className="inline-flex items-center space-x-2">
            <div className="relative w-40 h-20">
            <Image
                src={"/audiophile.svg"} 
                alt="Audiophile Logo"
                fill
                sizes='100%'
                className="object-contain"
                priority
            />
            </div>
        </div>
    </Link>

);
}
