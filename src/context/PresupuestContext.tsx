import { createContext, Dispatch, ReactNode, useReducer } from 'react'
import { intialState, PresupuestAction, presupuestReducer, PresupuestState } from '../reducers/presupuest-reducer'

type PresupuestContextProps = {
  state: PresupuestState,
  dispatch: Dispatch<PresupuestAction>
}

type PresupuestProviderProps = {
  children: ReactNode
}

export const PresupuestContext = createContext<PresupuestContextProps>({} as PresupuestContextProps)

export const PresupuestProvider = ({children}: PresupuestProviderProps) => {
  
  const [state, dispatch] = useReducer(presupuestReducer, intialState)

  return (
    <PresupuestContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </PresupuestContext.Provider>
  )
}