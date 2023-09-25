import Link from 'next/link'
import { useTranslation } from '../i18n'
import { HeroCarousel } from '../components/home'

type PageProps = {
  params: {
    locale: string,
  },
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Page({ params: { locale }, searchParams }: PageProps) {
  const { t } = await useTranslation(locale)

  return (
    <>
      <HeroCarousel />
      {/* <h1 className="text-4xl font-bold text-content bg-bkg">{t('title')}</h1> */}
      {/* <Link href={`/${locale}/second-page`}> */}
      {/*   {t('to-second-page')} */}
      {/* </Link> */}
    </>
  )
}
