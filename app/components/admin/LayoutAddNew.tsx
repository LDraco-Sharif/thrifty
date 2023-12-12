"use client"
import Link from "next/link"
import { IconPlus } from "."
import { useState } from "react"

type LayoutAddNewParams = {
  params?: { [key: string]: string | string[] | undefined }
}

export default function LayoutAddNew({ params }: LayoutAddNewParams) {
  const lang = params?.lang
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/${lang}/admin/manage`} className="self-baseline">
      <div className={`w-[18%]`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

        <div className="text-content bg-bkg hover:text-bkg hover:bg-content grid cursor-pointer grid-cols-2 items-baseline gap-3">
          <IconPlus isHovered={isHovered} />
          <span className="hover:bg-content w-16 self-baseline whitespace-nowrap text-[0.80rem]">ADD NEW</span>
        </div>
      </div>
    </Link>
  )
}
