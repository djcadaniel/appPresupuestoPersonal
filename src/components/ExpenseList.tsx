import { useMemo } from 'react';
import { usePresupuest } from '../hooks/usePresupuest'
import ExpenseDetail from './ExpenseDetail';


export default function ExpenseList() {
  
  const {state} = usePresupuest();

  const isEmpty = useMemo(()=>  state.expenses.length === 0, [state.expenses])
  const filterExpenses = state.currentCategory ? state.expenses.filter( item => item.category === state.currentCategory) : state.expenses

  return (
    <div className='md:mt-10  md:p-5 px-5 pb-5 md:px-0  md:max-w-4xl m-auto'>
      {isEmpty ? <p className='text-gray-600 text-2xl font-bold'>No hay gastos</p>: (
        <>
          <p className='text-gray-300 text-2xl font-bold my-5'>Listado de Gastos</p>
          {filterExpenses.map( expense => (
            <ExpenseDetail
              key={expense.id}
              expense={expense}
            />
          ))}
        </>
      )}
    </div>
  )
}