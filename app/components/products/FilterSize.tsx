"use client"
import { useState } from "react"
import { FilterSearch, FilterTitle } from "."

type FilterSizeProps = {
  type: string
  sizes: string[]
}

export default function FilterSize({ type, sizes }: FilterSizeProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [checkedItems, setCheckedItems] = useState<string[]>([])
  const [searchValue, setSearchValue] = useState("")

  const handleSizeChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const { innerText } = e.currentTarget

    if (checkedItems.includes(innerText)) {
      setCheckedItems(prevCheckedItems =>
        prevCheckedItems.filter(item => item !== innerText))
    } else {
      setCheckedItems(prevCheckedItems => [...prevCheckedItems, innerText])
    }
  }

  const filteredSizes = sizes.filter(size =>
    size.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <div>
      <FilterTitle
        type={type}
        setIsExpanded={setIsExpanded}
        uncheckItems={setCheckedItems}
        isExpanded={isExpanded}
      />

      {isExpanded && (
        <div className=" px-8">

          <FilterSearch setSearchValue={setSearchValue} />

          <div className="grid cursor-pointer select-none grid-cols-4 gap-2 pt-4">
            {filteredSizes.map((size, i) => {
              const colorOnClick = checkedItems.includes(size) ? 'text-bkg bg-content' : 'bg-bkg text-content'

              return (
                <div
                  key={`sizes-${i}`}
                  className={`grid place-items-center border-[0.1rem] p-1 px-4 ${colorOnClick}`}
                  onClick={handleSizeChange}
                >
                  {size}</div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
