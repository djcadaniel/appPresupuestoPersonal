import { formatCurrency } from "../helpers"

type PriceDisplay = {
  label?: string
  price: number
}

export default function PriceDisplay({label, price}: PriceDisplay) {
  return (
    <p className="text-xl md:text-2xl text-blue-600 font-bold">
      {label && `${label}: `}
      <span className="font-black text-white">{formatCurrency(price)}</span>
    </p>
  )
}