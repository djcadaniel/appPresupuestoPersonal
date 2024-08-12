import { createContext, Dispatch, ReactNode, useReducer } from 'react'
import { intialState, PresupuestAction, presupuestReducer, PresupuestState } from '../reducers/presupuest-reducer'

type PresupuestContextProps = {
  state: PresupuestState,
  dispatch: Dispatch<PresupuestAction>
  totalGastos: number
  disponible: number
}

type PresupuestProviderProps = {
  children: ReactNode
}

export const PresupuestContext = createContext<PresupuestContextProps>({} as PresupuestContextProps)

export const PresupuestProvider = ({children}: PresupuestProviderProps) => {

  const [state, dispatch] = useReducer(presupuestReducer, intialState)
  
  const totalGastos = state.expenses.reduce((total, gasto)=> gasto.price + total, 0);
  const disponible = state.presupuest.monto - totalGastos;

  return (
    <PresupuestContext.Provider
      value={{
        state,
        dispatch,
        totalGastos,
        disponible
      }}
    >
      {children}
    </PresupuestContext.Provider>
  )
}