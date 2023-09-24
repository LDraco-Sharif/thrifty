"use client"
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'
import { useThemeContext } from '../hooks/ThemeProvider'

type CategoryProps = {
}

const Category = ({ }: CategoryProps) => {
  const { theme } = useThemeContext()
  const color = theme !== "dark" ? "#191A1A" : "#fff"

  const categories = ['men', 'women', 'kids']
  // const currentTheme = theme === "dark" ? "content" : "bkg"
  const params = useSearchParams()
  const selected = params.get("category")

  return (
    <nav className="w-5/12 mx-auto pt-2">
      <ul className='grid grid-cols-3 w-full justify-items-center cursor-pointer'>
        {categories.map((category) => {
          return (
            <Link href={{
              pathname: usePathname(),
              query: {
                category: category
              }
            }}
              key={category}>
              <li
                className={`text-${selected === category ? `${color} font-extrabold` : 'faded'}`}>
                {category.toUpperCase()}
              </li>
            </Link>
          )
        })}
      </ul>
    </nav>
  )
}

export default Category
