import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

import { MdKeyboardArrowLeft } from "react-icons/md";

import { filter } from "../data/filterArrays"
import { albert, albert_500 } from "@/utils/fonts";
import { Gender, Locales } from "@/types/link";
import { brandNamesArray } from '@/app/components/data/brandsData'

type HamburgerDropdownCategoryProps = {
  category: 'clothing' | 'shoes' | 'accessories' | 'brands'
  selectedGender: Gender | ''
  gender: Gender
  lang: Locales
  setCategory: React.Dispatch<React.SetStateAction<string>>
}

export default function HamburgerDropdownCategory({ category, selectedGender, gender, lang, setCategory }: HamburgerDropdownCategoryProps) {

  return (
    <section className="absolute z-[70] w-[80%]">

      <div className="grid grid-cols-[auto_1fr_auto] items-center bg-t_mustard py-3 px-2">
        <div onClick={() => setCategory('')}>
          <MdKeyboardArrowLeft />
        </div>
        <span className={`text-center text-[0.875rem] ${albert.className}`}>CLOTHING</span>
        <div className="justify-self-end"> <RxCross2 /> </div>
      </div>

      <div className="flex flex-col gap-4 bg-t_white min-h-screen px-8 py-6">
        {category !== 'brands' && filter.type[selectedGender][category].map((item, index) => (
          <Link href={`/${lang}/${gender}/products?gender=${gender}&shop-by=new+in&sort-by=newfirst&page=1`} key={index} className={`${albert_500.className} tracking-wider text-[0.8125rem]`}>{item}</Link>
        ))}
        {category === 'brands' && brandNamesArray.map((brand, index) => (
          <Link href={`/${lang}/${gender}/products?gender=${gender}&brand=${brand}&shop-by=new+in&sort-by=newfirst&page=1`} key={index} className={`${albert_500.className} tracking-wider text-[0.8125rem]`}>{brand}</Link>
        ))}
      </div>
    </section>
  )
}

