import Image from "next/image";
import Link from "next/link";

type CatBoxProps = {
  imageSrc: string;
  catName: string;
  link: string;
}

    export const CatBox = ({link, imageSrc, catName }: CatBoxProps) => {
    return (
    <div className="cat-box relative bg-gray-200 w-[350px] h-[207px] rounded-md flex items-center justify-center">
        <figure className="w-52 h-52 absolute -top-20">
            <Image
            fill
            className=" object-cover"
            src={imageSrc}
            alt="Headphones category"
            />
        </figure>

        <div className="flex flex-col items-center gap-2 mt-auto mb-7">
            <h3 className="uppercase tracking-widest text-lg font-semibold">{catName}</h3>
            <Link href={link} className="flex items-center gap-2 text-black/50 uppercase text-sm tracking-wider hover:text-orange-500 transition">
            shop <img src="/shared/desktop/icon-arrow-right.svg" alt="" />
            </Link>
        </div>
        
    </div>
    )
    }