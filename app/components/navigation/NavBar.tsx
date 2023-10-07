"use client"
import { useThemeStore } from "@/state"
import { useDarkMode, useMediaQuery } from "../hooks"
import { IconAccount, IconFavorite, IconShoppingBag, Logo, SearchBar } from './'
import { useEffect } from "react"

const NavBar = () => {
  const updateTheme = useThemeStore((state) => state.updateTheme)
  const prefersDarkMode = useMediaQuery(['(prefers-color-scheme: dark)'], [true], false)

  // if (prefersDarkMode) {
  //   document.documentElement.dataset.theme = 'dark'
  //   updateTheme('dark')
  // }

  useEffect(() => {
    const newTheme = prefersDarkMode ? 'dark' : 'light'

    document.documentElement.dataset.theme = newTheme
    updateTheme(newTheme)
  }, [prefersDarkMode])

  return (
    <div className={`grid grid-cols-3 pb-2 pt-4 border-b-2 border-content relative`}>
      <SearchBar />
      <Logo />
      <nav className="flex gap-6 justify-self-end items-center pt-2">
        <IconAccount />
        <IconFavorite />
        <IconShoppingBag />
      </nav>
    </div>
  )
}

export default NavBar
