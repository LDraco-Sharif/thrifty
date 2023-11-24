import { ProductItemType } from "@/types/productItem"
import Image from 'next/image'
import { capitalize } from '@/utils/capitalize'

type ProductItemProps = {
  product: ProductItemType
  index: number
}

export default function ProductItem({ product, index }: ProductItemProps) {
  const { type, size, price, img_url, discount, brand } = product

  return (
    <div className="w-[20%] flex-grow-0 ">
      <div className="h-[20rem] w-[100%]">
        <Image
          src={img_url[0]}
          alt={'product-image'}
          width={100}
          height={100}
          className="block h-full w-full object-cover"
          priority={index + 1 < 9}
        />
      </div>
      <div className="bg-darkgrey w-full py-4 text-center text-[0.75rem] font-medium text-white">
        <span>ADD TO CART</span>
      </div>
      <div className="text-content text-[0.75rem] font-semibold">
        <div className="flex justify-between">
          <span>{capitalize(brand)}</span>
          <span>{size}</span>
        </div>
        <span className="block text-[0.75rem] font-light text-gray-200">{type}</span>
        <span>€{price}</span>
      </div>
    </div>
  )
}
