import { Presupuest } from "../types"

export type PresupuestAction = 
  { type: 'add-presupuest', payload: {presupuest: Presupuest} }

export type PresupuestState = {
  presupuest: Presupuest
}

export const intialState: PresupuestState = {
  presupuest: {
    name: '',
    monto: 0
  }
}

export const presupuestReducer = (
  state: PresupuestState = intialState,
  action:PresupuestAction
) => {

  if(action.type === 'add-presupuest'){
    return{
      ...state,
      presupuest: action.payload.presupuest
    }
  }

  return state

}