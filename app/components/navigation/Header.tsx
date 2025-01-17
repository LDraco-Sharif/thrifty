"use client"
import { usePathname } from "next/navigation";

import { BackToTop, Banner, NavBar } from "@/app/components/navigation";
import SimpleHeader from "@/app/components/navigation/SimpleHeader";
import AccountMenuBar from "@/app/components/navigation/AccountMenuBar";
import Gender from "@/app/components/navigation/Gender";
import MiniCart from "@/app/components/navigation/MiniCart";

export default function Header() {
  const pathname = usePathname()
  const isCheckout = pathname.split('/')[2] === 'checkout'
  const isAccountMenuBarItem = ['profile', 'addresses', 'orders', 'returns', 'settings', 'help'].includes(pathname.split('/')[3])

  return (
    !isCheckout ? <section className="relative">
      <MiniCart />
      <header className="dark:bg-t_black bg-t_white dark:text-t_white text-t_black flex flex-col items-center overflow-hidden">
        <Banner />
        <NavBar className="hidden sm:block" />
        <Gender />

        {isAccountMenuBarItem && <AccountMenuBar />}

        <BackToTop />
      </header>
    </section> : <SimpleHeader />
  )
}
