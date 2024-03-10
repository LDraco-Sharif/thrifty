"use client"
import { useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { useCartStore, useFavoriteStore, useNavigationStore } from "@/state/uiState"
import { IconFavorite, IconShoppingBag } from '@/app/components/navigation/icons/'
import Number from "@/app/components/navigation/Number"
import Account from "@/app/components/navigation/Account"
import MiniCartView from "@/app/components/navigation/MiniCartView"
import getLangAndGender from "@/utils/getLangAndGender"
import { getFromLocalStorage } from "@/utils/getFromLocalStorage"

type NavIconsProps = {
  className?: string
}

export default function NavIcons({ className }: NavIconsProps) {
  const { lang, gender } = getLangAndGender(usePathname())
  const { initCart, cartLength } = useCartStore()
  const { initFavorites, favoritesLength } = useFavoriteStore()
  const { showMiniCartView, setShowMiniCartView } = useNavigationStore()

  useEffect(() => {
    initCart(getFromLocalStorage('cart') || [])
    initFavorites(getFromLocalStorage('favorites') || [])
  }, [])

  const onMouseLeave = (e: React.MouseEvent) => {
    // if cursor leaves Link, up, left or right, hide MiniCartView
    if (e.clientX <= 1600 || e.clientX >= 1622 || e.clientY <= 55) {
      setShowMiniCartView(false)
    }
  }

  return (
    <nav className={`relative flex items-center gap-6 pt-2 ${className}`}>
      <Account />

      <Link href={`/${lang}/${gender}/favorites`} className="relative">
        <IconFavorite />
        <Number itemLength={favoritesLength} />
      </Link>

      <Link href={`/${lang}/${gender}/cart`}
        className="relative"
        onMouseEnter={() => setShowMiniCartView(true)}
        onMouseLeave={onMouseLeave}
      >
        <IconShoppingBag />
        <Number itemLength={cartLength} />
      </Link>
      {showMiniCartView && <MiniCartView />}
    </nav>
  )
}
