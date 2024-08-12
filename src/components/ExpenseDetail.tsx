import { useMemo } from "react"
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import { categories } from "../data/categories"
import { formatDate } from "../helpers"
import { Expense } from "../types"
import PriceDisplay from "./PriceDisplay"
import 'react-swipeable-list/dist/styles.css';
import { usePresupuest } from "../hooks/usePresupuest";

type ExpenseDetailProps = {
  expense: Expense
}

export default function ExpenseDetail({expense}: ExpenseDetailProps) {

  const {dispatch} = usePresupuest();

  const categoryImg = useMemo(()=> categories.filter(category => category.id === expense.category)[0], [expense])

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction 
        onClick={() =>dispatch({type:'get-expense-by-id', payload: {id: expense.id}})}
      >
        Actualizar
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        onClick={()=>dispatch({type: 'remove-expense', payload: {id: expense.id}})}
        destructive={true}
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        maxSwipe={30}
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className='bg-[#2B2B3B] shadow-lg p-5 md:p-10 w-full border-b border-gray-600 flex gap-5 items-center rounded-md text-white mb-5'>
          <div>
            <img 
              src={`img/icono_${categoryImg.icon}.svg`} 
              alt="ícono de gasto"
              className="w-14 md:w-20"
            />
          </div>
          <div>
            <p className="text-white">{expense.expenseName}</p>
            <p className="text-gray-300 text-sm">{formatDate(expense.date!.toString())}</p>
          </div>
          <PriceDisplay
            price={expense.price}
          />
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}