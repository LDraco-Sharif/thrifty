"use client"
import { useEffect, useRef, useState } from "react";

import CartPaymentMethods from "@/app/components/cart/CartPaymentMethods";
import { useCartStore } from "@/state/uiState";

const FREE_HOME_DELIVERY_PRICE = 25
const DELIVERY = {
  home: 10,
  store: 0
}

export default function CartOrderSummary() {
  const EURO = '€'
  const { cartTotalPrice, cartLength } = useCartStore()
  const [isFreeDelivery, setIsFreeDelivery] = useState(false)
  const [shippingText, setShippingText] = useState<string | number>(DELIVERY.home)
  const [shippingPrice, setShippingPrice] = useState(DELIVERY.home)
  const [totalPayment, setTotalPayment] = useState(cartTotalPrice + shippingPrice)
  const selectRef = useRef<HTMLSelectElement | null>(null)
  const freeDeliveryText = isFreeDelivery ? "Free home delivery reached" : "Left until free home delivery"
  const amountUntilFreeDelivery = FREE_HOME_DELIVERY_PRICE - cartTotalPrice < 0 ? "" : `${EURO}${FREE_HOME_DELIVERY_PRICE - cartTotalPrice}
`

  useEffect(() => {
    setIsFreeDelivery(cartTotalPrice > FREE_HOME_DELIVERY_PRICE)
    setTotalPayment(cartTotalPrice + shippingPrice)
  }, [cartTotalPrice])

  const selectOnChange = () => {
    const shippingPrice = DELIVERY[selectRef.current?.value as "home" | "store"]
    setShippingPrice(shippingPrice)
    setShippingText(shippingPrice === 0 ? "FREE" : `${EURO}${shippingPrice}`)
    setTotalPayment(cartTotalPrice + shippingPrice)
  }

  const checkout = () => {
    // setCheckoutInfo({ })
    console.table({
      payment: {
        total: totalPayment,
        currency: EURO
      },
      shipping: {
        price: shippingPrice,
        type: selectRef.current?.value
      },
    })
  }

  return (
    <div className="max-w-[320px]">
      <h1 className="my-10 text-center text-[0.875rem] font-semibold">ORDER SUMMARY</h1>

      <div className="border-faded grid grid-cols-2 gap-3 border-[0.1rem] p-6">
        <span className="text-nowrap text-[0.75rem] font-medium">{freeDeliveryText}</span>
        <span className="justify-self-end text-[0.75rem] font-normal">{amountUntilFreeDelivery}</span>
        <span className="text-[0.75rem] font-medium">{cartLength} {cartLength > 1 ? "items" : "item"}</span>
        <span className="justify-self-end text-[0.75rem] font-normal">{EURO}{cartTotalPrice}</span>
        <span className="text-[0.75rem] font-medium">Shipping</span>
        <span className="justify-self-end text-[0.75rem] font-normal">{shippingText}</span>
        <select className="text-bkg bg-faded col-span-full text-[0.75rem] font-medium" name="shipping" id="shipping" ref={selectRef} onChange={selectOnChange}>
          <option value="home" className="">Home Delivery 2-3 Days</option>
          <option value="store" className="">Collect from store </option>
        </select>
        <span className="my-4 text-[0.875rem] font-semibold">TOTAL COST</span>
        <span className="self-center justify-self-end text-[0.875rem] font-semibold">{EURO}{totalPayment}</span>
        <button className="bg-content text-bkg col-span-full p-3 text-[0.875rem] font-semibold" onClick={checkout}>CHECKOUT</button>
      </div>

      <CartPaymentMethods />

    </div>
  )
}
