"use client"
import { fetchAllProducts } from "@/utils/fetchAllProducts";
import Image from 'next/image'
import { useUIStore } from "@/state";
import { useEffect, useState } from "react";
import { ProductItemType } from "@/types/productItem";
import { supabase } from "@/app/supabase";

export default function StatusImages() {
  const { isSaved } = useUIStore();
  const [data, setData] = useState<ProductItemType[]>([]);

  useEffect(() => {
    const fetchDrafts = async () => {
      const result = await fetchAllProducts(supabase, 'draft')
      if (result !== null) setData(result)
    }
    fetchDrafts()
  }, [isSaved])

  return (
    <div className="flex h-[26.8rem] p-6">
      <div className="hover:bg-darkgrey flex h-full w-[50%] max-w-[50%] flex-wrap gap-[0.5rem] overflow-y-scroll rounded-lg p-6">
        {data?.filter(el => el.img_url && el.img_url.length > 0)
          .map((el, i) => (
            <div className="w-[19.1%] flex-grow-0 object-cover"
              key={i}
            >
              <Image
                className="block min-w-full"
                src={el.img_url[0]}
                alt={`new-product-${i}`}
                width={100}
                height={100} />
            </div>
          ))}
      </div>

      <div className="max-w-[50%]">right</div>
    </div>
  )
}
