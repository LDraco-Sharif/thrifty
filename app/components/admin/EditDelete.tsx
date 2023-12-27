"use client"
import { MdEdit } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";
import { useUIStore } from '@/state';
import { Popup } from "../generic"
import { useState } from "react";
import Portal from "./Portal";
import { supabase } from "@/app/supabase";
import { useRouter } from "next/navigation";

type EditDeleteProps = {
  uuid: string
}

const EditDelete = ({ uuid }: EditDeleteProps) => {
  const { setShowOptions } = useUIStore()
  const [showPopup, setShowPopup] = useState(false)
  const router = useRouter()

  const deleteFromDb = async (uuid: string) => {

    const { error } = await supabase
      .from('draft')
      .delete()
      .eq('uuid', uuid)

    if (error) {
      console.error(error)
      return
    }
    setShowPopup(false)
    router.refresh()
  }

  return (
    <section
      className="absolute left-1/2 top-1/2 flex translate-x-[-50%] translate-y-[-50%] items-center gap-3"
      onMouseEnter={() => setShowOptions(true)}

    >
      <div className="grid cursor-pointer place-items-center rounded-full bg-black p-[0.40rem]" title="Edit" >
        <MdEdit color="white" size={25} />
      </div>
      <div
        className="rotate-45 cursor-pointer"
      >
        <FaPlusCircle size={40} title="Delete" onClick={() => setShowPopup(true)} />
      </div>

      {showPopup && (
        <Portal>
          <Popup
            option1={{ value: "DELETE", function: async () => await deleteFromDb(uuid) }}
            option2={{ value: "CANCEL", function: () => setShowPopup(false) }}
          >
            Are you sure you want to delete this item?</Popup>
        </Portal>

      )}

    </section>
  )
}

export default EditDelete
