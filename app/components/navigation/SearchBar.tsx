/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { useTranslation } from '@/i18n/client';
import { IconSearch } from '@/app/components/navigation/icons';
import getLinkWithSearchParams from '@/utils/getLinkWithSearchParams';
import useViewport from '@/app/components/hooks/useViewport';
import { viewport } from '@/app/components/data/universalStyles';
import getLangAndGender from '@/utils/getLangAndGender';
import { ProductItemType } from '@/types/productItem';
import { supabase } from '@/app/supabase';
import { completeWord } from '@/utils/home';
import useDebounce from '@/app/components/hooks/useDebounce';
import { useNavigationStore } from "@/state/client/navigationState";
import { RxCross2 } from "react-icons/rx";

type SearchBarProps = {
  className?: string
}

export default function SearchBar({ className }: SearchBarProps) {
  const { lang, gender } = getLangAndGender(usePathname())
  const { t } = useTranslation(lang, 'layout')
  const router = useRouter()
  const currentViewport = useViewport()
  const hide = currentViewport < viewport.lg

  const [searchTerm, setSearchTerm] = useState('')
  const [showResults, setShowResults] = useState(false)
  const [results, setResults] = useState<ProductItemType[] | []>([])
  const [completedWord, setCompletedWord] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 500)
  const { showMobileSearch, setShowMobileSearch } = useNavigationStore()

  useEffect(() => {
    const getResults = async (): Promise<ProductItemType[] | []> => {
      if (!debouncedSearchTerm) {
        return []
      }
      const columns = ['gender', 'type', 'category', 'brand']
      let results: ProductItemType[] = []

      for (const column of columns) {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .ilike(column, `%${debouncedSearchTerm}%`)
          .order('created_at', { ascending: false })
          .limit(5)

        if (error) {
          console.error(error)
        }

        if (data) {
          results = [...results, ...data]
          setCompletedWord(completeWord(debouncedSearchTerm, data, columns) as string)
        }
      }
      const uniqueResults = Array.from(
        new Set(results.map(item => item.uuid))
      ).map(id => results.find(item => item.uuid === id))
        .filter((item): item is ProductItemType => item !== undefined);

      return uniqueResults
    }

    getResults().then((results) => {
      if (results) {
        setResults(results)
      }
    })

  }, [showResults, debouncedSearchTerm])

  useEffect(() => {
    if (searchTerm.length > 2) {
      setShowResults(true)
    } else {
      setShowResults(false)
    }

  }, [searchTerm])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    setShowMobileSearch(false)
    setShowResults(false)
    if (searchTerm) {
      router.push(
        getLinkWithSearchParams(searchTerm.toString(), lang, gender)
      );
    }
  }

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setSearchTerm(e.target.value)
  }

  function handleSearchByIcon() {
    setShowMobileSearch(false)
    router.push(
      getLinkWithSearchParams(searchTerm, lang, gender)
    )
  }

  return (
    <form className={`text-bkg relative flex items-end gap-2 ${className} w-full`}
      onSubmit={(e: React.FormEvent) => handleSubmit(e)}
    >
      <div onClick={() => setSearchTerm("")}>
        <RxCross2 className="absolute -right-2 top-1" size={20} />
      </div>

      <div
        className="cursor-pointer"
        onClick={handleSearchByIcon}
      >
        <IconSearch className="self-end" />
      </div>

      <input
        type="search"
        name="search"
        value={searchTerm}
        placeholder={hide ? '' : t('search')}
        className={`text-t_black dark:text-t_white w-full appearance-none self-end border-none bg-transparent p-0 outline-0 ring-0 placeholder:text-[0.8rem] placeholder:text-t_black placeholder:dark:text-t_white placeholder:font-semibold focus:outline-none focus:ring-0`}
        style={{ WebkitAppearance: 'none' }}
        spellCheck="false"
        onChange={handleOnChange}
      />
      {showResults && (
        <div className="w-full absolute bg-t_white dark:bg-t_black top-[2rem] flex flex-col gap-4 p-4">

          {results.map((item) => (
            <div key={item.uuid} onClick={() => {
              setShowResults(false)
              router.push(
                getLinkWithSearchParams(`${item.brand} ${item.type}`, lang, gender)
              )
            }} className="cursor-pointer">
              <span>{completedWord === item.brand ? '' : completedWord}</span>
              <span>{item.brand}</span>
              <span className="ml-2">{item.type}</span>
            </div>
          ))}
        </div>
      )
      }
    </form>
  );
}
