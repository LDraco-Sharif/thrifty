"use client"
import { useUIStore } from "@/state";
import { usePathname } from "next/navigation";
import { LanguageElement } from ".";

export type LanguagePickerParams = {
}

const LanguagePicker = () => {
  const locales = ['en', 'de'];
  const [_, lang, category] = usePathname()
  const { showBanner } = useUIStore()
  const textColor = showBanner ? 'text-black' : 'text-content'
  const top = showBanner ? 'top-0' : 'top-5'

  return (
    <nav lang={lang} className={`flex items-center bg-bkg gap-3 bg-transparent hover:cursor-pointer py-1 z-50 relative justify-self-start
      ${top} ${textColor}`}>

      {locales.map((locale: string) => {
        const className = `${locale === 'en' ? 'separator' : ''}`

        return (
          <span key={locale} className={className}>
            <LanguageElement {...{ locale }} />
          </span>
        )
      })}
    </nav>
  );
}

export default LanguagePicker;

