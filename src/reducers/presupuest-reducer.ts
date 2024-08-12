import { v4 as uuidv4 } from 'uuid'
import { DraftExpense, Expense, Presupuest } from "../types"

export type PresupuestAction = 
  { type: 'add-presupuest', payload: {presupuest: Presupuest} } |
  { type: 'show-modal' } |
  { type: 'close-modal' } |
  { type: 'add-expense', payload:{expense: DraftExpense} } |
  { type: 'remove-expense', payload: {id: Expense['id']} } |
  { type: 'get-expense-by-id', payload: {id: Expense['id']} } |
  { type: 'update-expense', payload: {expense: Expense} }

export type PresupuestState = {
  presupuest: Presupuest
  modal: boolean
  expenses: Expense[]
  editingId: Expense['id']
}

const initialPresupuest = ():Presupuest => {
  const localStoragePresupuest = localStorage.getItem('presupuest');
  return localStoragePresupuest ? JSON.parse(localStoragePresupuest) : {}
}

const localStorageExpenses = ():Expense[] => {
  const localStorageExpenses = localStorage.getItem('expenses')
  return localStorageExpenses ? JSON.parse(localStorageExpenses) : []
}

export const intialState: PresupuestState = {
  presupuest: initialPresupuest(),
  modal: false,
  expenses: localStorageExpenses(),
  editingId: ''
}

const createExpense = (draftExpense: DraftExpense) => {
  return {
    ...draftExpense,
    id: uuidv4()
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

  if( action.type === 'show-modal' ){
    return {
      ...state,
      modal: true
    }
  }

  if( action.type === 'close-modal' ){
    return {
      ...state,
      modal: false,
      editingId: ''
    }
  }

  if(action.type === 'add-expense'){
    const expense = createExpense(action.payload.expense)
    return{
      ...state,
      expenses: [...state.expenses, expense],
      modal: false
    }
  }

  if(action.type === 'remove-expense'){
    return{
      ...state,
      expenses: state.expenses.filter( expense => expense.id !== action.payload.id )
    }
  }

  if(action.type === 'get-expense-by-id'){
    return{
      ...state,
      editingId: action.payload.id,
      modal: true
    }
  }

  if(action.type === 'update-expense'){
    return{
      ...state,
      expenses: state.expenses.map(expense => expense.id === action.payload.expense.id ? action.payload.expense : expense),
      modal: false,
      editingId: ''
    }
  }

  return state

}