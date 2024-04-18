"use client"
import { useState } from 'react';

import WithHome from '@/app/components/navigation/WithHome'
import Logo from '@/app/components/navigation/Logo'
import useViewport from '@/app/components/hooks/useViewport';
import HeroImage from '@/app/components/home/HeroImage';
import HeroSticker from '@/app/components/home/HeroSticker';
import HeroTextNewIn from '@/app/components/home/HeroTextNewIn';
import HeroTextSale from '@/app/components/home/HeroTextSale';
import HeroButton from '@/app/components/home/HeroButton';
import HeroBarSwitch from '@/app/components/home/HeroBarSwitch';
import { HeroState } from '@/types/home';
import { usePathname } from 'next/navigation';
import getLangAndGender from '@/utils/getLangAndGender';

export default function Hero() {
  const [state, setState] = useState<HeroState>('new_in')
  const { gender } = getLangAndGender(usePathname())
  const viewportWidth = useViewport()
  const logoColor = state === 'sale' && gender === 'kids' ? 'black' : 'white'

  const handleStateChange = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement

    if (target.dataset.state === state) {
      return
    }

    setState(state === 'new_in' ? 'sale' : 'new_in')
  }

  return (
    <section className="w-full relative">
      <HeroImage state={state} />

      <HeroSticker state={state} />

      {viewportWidth < 1024 && (
        <div className="absolute top-6 left-0 right-0">
          <WithHome><Logo logoColor={logoColor} /> </WithHome>
        </div>
      )}

      {state === 'new_in' ? (<HeroTextNewIn />) : (<HeroTextSale />)}

      <HeroButton state={state} />

      <HeroBarSwitch handleStateChange={handleStateChange} state={state} />
    </section>
  )
}

