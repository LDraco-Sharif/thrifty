"use client"
import Link from "next/link"
import { useFavoritesOrCart } from "@/app/components/hooks"
import { IconFavorite, IconShoppingBag } from "@/app/components/navigation/icons"
import { useThemeStore } from "@/state/themeState"

type FavoritesOrCartProps = {
  lang: string
}

export default function FavoritesOrCart({ lang }: FavoritesOrCartProps) {
  const { includesCart, includesFavorites, isFavorites, isCart } = useFavoritesOrCart()
  const { theme } = useThemeStore()

  const getIconColor = (theme: 'light' | 'dark', includes: boolean) => {
    if (!includes) {
      return "grey"
    }
    return theme === "light" ? "black" : "white"
  }

  return (
    (includesCart || includesFavorites) ? (
      <div className="text-content justify-content grid w-full w-screen cursor-pointer grid-cols-2 gap-6 px-28 text-[1.125rem] font-medium tracking-wider">

        <Link href={`/${lang}/cart`}
          className={`${isCart} pb-3 flex justify-center items-center gap-2`}>
          <IconShoppingBag stroke={getIconColor(theme, includesCart)} />
          <span className="text-[0.875rem] font-bold">CART</span>
        </Link>

        <Link href={`/${lang}/favorites`}
          className={`${isFavorites} pb-3 flex justify-center items-center gap-2`}>
          <IconFavorite stroke={getIconColor(theme, includesFavorites)} />
          <span className="text-[0.875rem] font-bold">FAVORITES</span>
        </Link>
      </div>

    ) : null)

}
