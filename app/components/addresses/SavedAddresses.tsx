"use client"
import { borderRadius } from '@/app/components/data/universalStyles'
import { supabase } from '@/app/supabase'
import { useEffect, useState } from 'react'
import AddNewAddressForm from '@/app/components/addresses/AddNewAddressForm'
import { TAddress } from '@/types/shippingAddress'
import { useAddressStore } from '@/state/client/addressState'

type SavedAddressProps = {
  dbAddresses: TAddress[]
}

export default function SavedAddresses({ dbAddresses }: SavedAddressProps) {
  const { deleteAddress, setAsDefault, showEditForm, setShowEditForm } = useAddressStore()
  const [updatedAddresses, setUpdatedAddresses] = useState(dbAddresses)
  const [addressBeingEdited, setAddressBeingEdited] = useState('')

  useEffect(() => {
    const channels = supabase.channel('custom-all-channel')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'clients' },
        (payload) => {
          setUpdatedAddresses((payload.new as { addresses: TAddress[] }).addresses)
        }
      )
      .subscribe()
  }, [updatedAddresses])


  function handleEdit(addressId: string) {
    setShowEditForm(true)
    setAddressBeingEdited(addressId)
  }

  return (
    <>
      <div className={`flex gap-4 overflow-x-auto`}>
        {updatedAddresses.map((address) => (
          <div key={address.addressId} className={`bg-faded m-5 flex flex-col gap-10 ${borderRadius} min-w-[10rem] p-6 text-[0.8125rem] font-medium text-black`}>
            <div className="">
              <div className="flex gap-2">
                <span>{address.firstName}</span>
                <span>{address.lastName}</span>
              </div>
              <span className="block">{address.phone}</span>
              <span className="block">{address.address}</span>
              <span className="block">{address.city}</span>
              <span className="block">{address.country}</span>
            </div>

            <div className="*:cursor-pointer flex items-baseline gap-4 text-[0.75rem] font-extrabold">
              <span onClick={() => handleEdit(address.addressId)}>EDIT</span>
              <span onClick={() => deleteAddress(address.addressId, address.userId)}>DELETE</span>
              <span onClick={() => setAsDefault(address.addressId, address.userId)} className={`whitespace-nowrap ${address.isDefault ? 'rounded-full bg-black p-1 text-white' : ''}`}>
                {address.isDefault ? 'DEFAULT' : 'SET AS DEFAULT'}
              </span>
            </div>
          </div>
        ))}
      </div>
      {showEditForm && <AddNewAddressForm addressBeingEdited={addressBeingEdited} />}
    </>
  )
}
