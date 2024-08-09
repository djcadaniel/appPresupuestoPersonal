import { categories } from '../data/categories'
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { DraftExpense, Value } from '../types';
import { ErrorMessage } from './ErrorMessage';
import { usePresupuest } from '../hooks/usePresupuest';

export default function ExpenseForm() {

  const [expense, setExpense] = useState<DraftExpense>({
    expenseName: '',
    price: 0,
    category: '',
    date: new Date()
  })
  const [error, setError] = useState('')
  const {state, dispatch} = usePresupuest()

  useEffect(()=> {
    if(state.editingId){
      const editingExpense = state.expenses.filter( currentExpense => currentExpense.id === state.editingId)[0]
      setExpense(editingExpense)
    }
  },[state.editingId])

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const {name, value} = e.target;
    const isPriceField = ['price'].includes(name)
    setExpense({
      ...expense,
      [name] : isPriceField ? +value : value
    })
  }

  const handleChangeDate = (value: Value) => {
    setExpense({
      ...expense,
      date: value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(Object.values(expense).includes('')){
      setError('Todos los campos son obligatorios')
      return
    }
    
    if(state.editingId){
      
    }else{
      dispatch({type: 'add-expense', payload: {expense}})
    }

    setExpense({
      expenseName: '',
      price:0,
      category:'',
      date: new Date()
    })
  }


  return (
    <form action="" className='space-y-5' onSubmit={handleSubmit}>
      <legend
        className='upppercase text-center text-2xl border-b-4 border-[#50BFBB] py-2 text-white font-changa'
      >
        Nuevo gasto
        { error && <ErrorMessage>{error}</ErrorMessage> }
      </legend>
      <div className='flex flex-col gap-2'>
        <label 
          htmlFor="expenseName"
          className='text-xl text-white font-changa'
        >
          Gasto
        </label>
        <input 
          id= 'expenseName'
          name='expenseName'
          type="text"
          placeholder='Ingresa nombre del gasto'
          className='bg-slate-500 p-2 text-white placeholder:text-slate-300 font-changa rounded-md focus:outline-double focus:outline-[#50BFBB]'
          value={expense.expenseName}
          onChange={handleChange}
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label 
          htmlFor="amount"
          className='text-xl text-white font-changa'
        >
          Precio
        </label>
        <input
          id='price'
          name='price' 
          type="text" 
          placeholder='Ingresa precio'
          className='
          bg-slate-500 p-2 font-changa rounded-md focus:outline-double focus:outline-[#50BFBB] text-white placeholder:text-slate-300'
          value={expense.price}
          onChange={handleChange}
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label 
          htmlFor="category"
          className='text-xl text-white font-changa'
        >
          Categorías
        </label>
        <select 
          id="category" 
          name="category"
          className='bg-slate-500 p-2 font-changa rounded-md focus:outline-double focus:outline-[#50BFBB] text-white'
          value={expense.category}
          onChange={handleChange}
        > 
          <option value="" className='text-slate-300'>Seleccione😉</option>
          {categories.map(category => (
            <option
              key={category.id}
              value={category.id}
              className='text-white'
            >
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className='flex flex-col gap-2'>
        <label 
          htmlFor="date"
          className='text-xl text-white'
        >
          Fecha
        </label>
        <DatePicker 
          className='mb-7 bg-slate-500 p-2 border-0 rounded-md focus:outline-double focus:outline-[#50BFBB]'
          value={expense.date}
          onChange={handleChangeDate}
        />
      </div>
      <input 
        type="submit"
        className='bg-gradient-to-r from-[#50BFBB] to-blue-500 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg text-center ouline-none transition duration-300 ease-in-out focus:outline-double focus:outline-[#50BFBB]'
        value='Registrar gasto' 
      />
    </form>
  )
}