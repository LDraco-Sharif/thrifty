'use client'
import { useUIStore } from "@/state/uiState"
import { twMerge as tm } from 'tailwind-merge'
import { useEffect, useState } from "react"
import { createBrowserClient } from '@supabase/ssr'
import { useUserSession } from "../hooks"

type StatusBarProps = {
  children: React.ReactNode
}

export default function StatusBar({ children }: StatusBarProps) {
  const { raiseStatusBar, statusBar } = useUIStore()
  const { isSaved, setIsSaved } = useUIStore();
  const [draftCount, setDraftCount] = useState(0)
  let height = !statusBar ? 'h-0' : 'h-[48vh]'

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    const fetchDrafts = async () => {
      const { data, error } = await supabase.from('draft').select('*');
      setDraftCount(data?.length as number)
    }
    fetchDrafts()
  }, [isSaved])

  const saveDraftToProducts = async () => {
    try {
      const { data, error: selectError } = await supabase.from('draft').select('*')
      if (selectError) {
        throw selectError
      }
      if (data && data.length > 0) {
        const { error: insertError } = await supabase.from('products').insert(data)
        if (insertError) {
          throw insertError
        }
        const { error: deleteError } = await supabase.from('draft').delete().not("uuid", "is", null)
        if (deleteError) {
          throw deleteError
        }
        console.log('Data moved successfully & draft deleted')
      } else {
        console.log('No data found in draft')
      }
    } catch (e: any) {
      console.log('Error moving data: ' + e.message)
    }
  }

  return (
    <div className={tm(`bg-content ${height} text-bkg fixed bottom-0 left-0 right-0 grid w-screen text-[1.2rem] font-bold`)}
      onMouseEnter={() => raiseStatusBar(true)}
      onMouseLeave={() => raiseStatusBar(false)}
    >
      {children}

      <div className="bg-content fixed bottom-0 left-0 right-0 grid w-screen grid-cols-[auto_auto_1fr] gap-8 p-6 ">
        <span>CREATED: {draftCount} </span>
        <span className="justify-self-start">EDITED: 0 </span>

        <button className="bg-bkg text-content cursor-pointer justify-self-end px-24 py-4 font-semibold tracking-wider"
          onClick={saveDraftToProducts}
        >
          PUBLISH CHANGES
        </button>
      </div>
    </div >
  )
}
