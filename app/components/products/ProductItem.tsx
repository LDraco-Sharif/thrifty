import Image from 'next/image'
import Link from "next/link"

import { twMerge as tm } from 'tailwind-merge'

import { capitalize } from '@/utils/capitalize'
import { ProductItemType } from "@/types/productItem"
import { Gender, Locales } from "@/types/link"
import ProductAddToCart from '@/app/components/products/ProductAddToCart'
import ProductToggleFavorite from '@/app/components/products/ProductToggleFavorite'
import { EURO } from '@/app/components/data/orderSummary'

type ProductItemProps = {
  product: ProductItemType
  index: number
  lang?: Locales
  gender?: Gender
  className?: string
  searchParams?: { [key: string]: string | string[] | undefined }
}

export default function ProductItem({ product, index, lang, gender, className, searchParams }: ProductItemProps) {
  const { size, price, img_url, discount, brand, uuid } = product

  return (
    <div className={`flex-grow-0`}>
      <ProductToggleFavorite uuid={uuid} />

      <div className={tm(`${className}`)}>
        <Link href={`/${lang}/${gender}/products/${uuid}`}>
          <Image
            src={img_url[0]}
            alt={'product-image'}
            width={100}
            height={100}
            className="block h-full w-full object-cover"
            priority={index + 1 < 9}
          />
        </Link>
      </div>

      <div className="text-content my-2 text-[0.75rem] font-semibold">
        <div className="flex justify-between">
          <span>{capitalize(brand)}</span>
          <span className={`${discount > 0 ? 'line-through' : ''}`}>{EURO}{price}</span> {/* original price */}
        </div>

        <div className="flex justify-between">
          <span>{size}</span>
          {discount > 0 && (
            <div className="flex">
              <span className="bg-red px-[0.10rem] text-white">-{discount}%</span>
              <span className="text-red ml-1">{EURO}{price * (100 - discount) / 100}</span> {/* discount price */}
            </div>
          )}
        </div>
      </div>

      <ProductAddToCart uuid={uuid}>ADD TO CART</ProductAddToCart>
    </div>
  )
}
