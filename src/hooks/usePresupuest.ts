import { useContext } from 'react'
import { PresupuestContext } from '../context/PresupuestContext'

export const usePresupuest = () => {
  const context = useContext(PresupuestContext)
  return context
}