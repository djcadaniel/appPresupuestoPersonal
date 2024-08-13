import { ChangeEvent } from "react"
import { categories } from "../data/categories"
import { usePresupuest } from "../hooks/usePresupuest"


export const FilterByCategory = () => {
  
  const { dispatch } = usePresupuest();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({type:'add-filter-category', payload:{id: e.target.value}})
  }

  return (
    <div className="bg-[#15151E] shadow-lg rounded-lg p-5 px-5 md:px-0 text-gray-300 text-2xl font-bold my-5">
      <form action="">
        <div className="flex flex-col" gap-5>
          <label htmlFor="category" className="pb-5">Filtrar por categoría</label>
          <select 
            id="category"
            name="category" 
            className="bg-[#2B2B3B] p-3 flex-1 rounded text-sm text-slate-100 focus:outline focus:outline-[#279199] "
            onChange={handleChange}
          >
            <option value="">Todos</option>
            {categories.map(item => (
              <option
                key={item.id} 
                value={item.id}
              >
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  )
}
