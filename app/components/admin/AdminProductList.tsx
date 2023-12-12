"use client"
import { ProductItemType } from "@/types/productItem"
import { useState } from "react"
import Image from 'next/image'
import { AdminProductSummary } from "."

type AdminProductListProps = {
  draft: ProductItemType[]
}

export default function AdminProductList({ draft }: AdminProductListProps) {
  const [showPopup, setShowPopup] = useState(new Array(draft.length).fill(false))

  const onMouseHandler = (i: number, boolean: boolean) => {
    setShowPopup(prevState => {

      const newState = [...prevState];
      newState[i] = boolean;
      return newState;
    });
  }

  return (
    <div className="mx-auto flex flex-wrap gap-[0.5rem] overflow-y-scroll rounded-lg p-6">
      {draft?.filter(el => el.img_url && el.img_url.length > 0).map((el, i) => (
        <div className="h-[5.8rem] w-[5.8rem]"
          key={i}
          onMouseOver={() => onMouseHandler(i, true)}
          onMouseLeave={() => onMouseHandler(i, false)}
        >
          <Image
            className="relative block h-full w-full object-cover"
            src={el.img_url[0]}
            alt={`new-product-${i}`}
            width={100}
            height={100}
          />
          {showPopup[i] && <AdminProductSummary el={el} />}
        </div>
      ))}
    </div>

  )
}
