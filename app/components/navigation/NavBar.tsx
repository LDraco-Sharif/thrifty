"use client"
import { useUIStore } from "@/state"
import { useDarkMode } from "../hooks"
import { IconAccount, IconFavorite, IconShoppingBag, Logo, SearchBar, WithHome } from './'

const NavBar = () => {
  useDarkMode()
  const { setShowCategoryMenu } = useUIStore()
  // makes categorymenu disappear when exiting with mouseover on top

  return (
    <section className="w-full max-w-[1440px] ">
      <div className={`grid grid-cols-3 pb-2 pt-4 w-full border-b-2 border-content relative mx-auto`}
        onMouseEnter={() => setShowCategoryMenu(false)}
      >
        <SearchBar />

        <WithHome> <Logo /> </WithHome>

        <nav className="flex items-center gap-6 justify-self-end pt-2">
          <IconAccount />
          <IconFavorite />
          <IconShoppingBag />
        </nav>
      </div>
    </section>
  )
}

export default NavBar
