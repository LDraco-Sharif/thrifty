"use client"
import { usePathname, useRouter } from "next/navigation";

import { borderRadius } from "@/app/components/data/universalStyles";
import { useCheckoutStore, useOrderSummaryStore } from "@/state/uiState";
import { EURO } from "../data/orderSummary";

type Endpoint = 'cart' | 'checkout' | 'summary'

export default function SummarySubmit() {
  const [router, pathname] = [useRouter(), usePathname()]
  const splitPath = pathname.split('/')
  const lang = splitPath[1]
  const endpoint = splitPath[splitPath.length - 1]

  const { isContactErrorFree, isShippingErrorFree, isPaymentErrorFree } = useCheckoutStore()
  const { totalWithShipping } = useOrderSummaryStore()

  const checkout = () => {
    if (endpoint === 'cart') {
      router.push(`/${lang}/checkout`)
    }

    if (endpoint === 'checkout') {
      if (isContactErrorFree && isShippingErrorFree && isPaymentErrorFree) {
        router.push(`/${lang}/checkout/summary`)
      } else {
        return
      }
    }

    if (endpoint === 'summary') {
      router.push(`/${lang}/checkout/success`)
    }
  }



  const getButtonText = (endpoint: Endpoint) => {
    const text = {
      cart: "CONFIRM ORDER",
      checkout: "CHECKOUT",
      summary: `PAY ${EURO}${totalWithShipping}`
    }

    return text[endpoint]
  }
  const textContent = getButtonText(endpoint as Endpoint)

  return (
    <button
      className={`bg-content text-bkg col-span-full p-3 text-[0.875rem] font-semibold ${borderRadius}`}
      onClick={checkout}>
      {textContent}
    </button>
  )
}