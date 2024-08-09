import { ReactNode } from "react"

type ErrorMessageProps = {
  children: ReactNode
}

export const ErrorMessage = ({children}: ErrorMessageProps) => {
  return (
    <p className='bg-red-500 text-white font-bold text-sm text-center'>
      {children}
    </p>
  )
}