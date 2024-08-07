import { formatCurrency } from "../helpers"

type PresupuestAmountProps = {
  label: string,
  amount: number
}

export default function PresupuestAmount({label, amount} : PresupuestAmountProps) {
  return (
    <p className="text-xl md:text-2xl text-[#50BFBB] md:font-bold font-changa">
      {label}: {' '}
      <span className="font-changa font-black text-white text-sm md:text-xl">{formatCurrency(amount)}</span>
    </p>
  )
}