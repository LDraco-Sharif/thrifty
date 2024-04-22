"use client"
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { useTranslation } from '@/i18n/client';

import { type Gender, Locales } from '@/types/link';
import GenderMenu from '@/app/components/navigation/GenderMenu';
import { useGenderStore } from '@/state/client/genderState';
import useViewport from '@/app/components/hooks/useViewport';
import { viewport } from '@/app/components/data/universalStyles';
import { albert, albert_700 } from '@/utils/fonts';

export default function Gender() {
  const [, currentLocale, currentGender,] = usePathname().split('/');
  const { showGenderMenu, setGender, setShowGenderMenu } = useGenderStore()
  const viewportWidth = useViewport()

  const { t } = useTranslation(currentLocale as Locales, 'layout')
  const categories = [
    t('category.men') as Gender,
    t('category.women') as Gender,
    t('category.kids') as Gender,
  ]

  return (
    <nav className="w-screen md:w-full">
      <div className="mx-auto max-w-[13rem] sm:max-w-[17rem] xl:max-w-[20rem] pt-2">

        <ul className="grid cursor-pointer grid-cols-3 text-[0.75rem] md:text-[0.9375rem] justify-items-center dark:text-t_white text-t_black"
        >
          {categories.map((gender: Gender) => {
            const lowerCaseGender = gender.toLowerCase()
            const text = currentGender === lowerCaseGender ? `${albert_700.className}` : `text-t_grey ${albert.className}`
            return (
              <li
                key={gender}
                className={text}
              >
                <Link
                  href={`/${currentLocale}/${lowerCaseGender}`}
                  onMouseOver={() => {
                    setShowGenderMenu(true)
                    setGender(lowerCaseGender as Gender)
                  }}
                >
                  {gender.toUpperCase()}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      {viewportWidth > viewport.lg && showGenderMenu && <GenderMenu />}
    </nav>
  );
};
