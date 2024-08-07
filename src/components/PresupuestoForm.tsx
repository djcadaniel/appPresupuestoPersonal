import { ChangeEvent, FormEvent, useMemo, useState } from "react"
import { Presupuest } from "../types"
import { usePresupuest } from "../hooks/usePresupuest";

export default function PresupuestoForm() {

  const [presupuesto, setPresupuesto] = useState<Presupuest>({
    name: '',
    monto: 0
  })
  const [emptyName, setEmptyName] = useState(false);
  const {dispatch} = usePresupuest()

  const MIN_VALUE = 0;
  const isValidityPrice = (value: number) =>{
    return (value < MIN_VALUE) ? true : false;
  }
  const handleChange = ({target}: ChangeEvent<HTMLInputElement>) =>{
    
    const isNumberPresupuest = ['monto'].includes(target.id);

    if(isValidityPrice(+target.value)){
      alert('Ingresa un número mayor a 0')
    }else{
      setPresupuesto({
        ...presupuesto,
        [target.id] : isNumberPresupuest ? +target.value : target.value
      })
    }

  }

  const isValid = useMemo(() =>{
    return presupuesto.monto <= MIN_VALUE
  },[presupuesto.monto, presupuesto.monto])

  const handleBlur = () => {
    return (!presupuesto.name) ? setEmptyName(true) : setEmptyName(false)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: 'add-presupuest', payload: {presupuest: presupuesto} })
  }

  return (
    <form className="w-full md:w-1/2 mx-auto" onSubmit={handleSubmit}>
      <div className="bg-[#2B2B3B] rounded-md">
        <div className="flex flex-col items-start space-y-5 p-5">
          <label 
            htmlFor="name"
            className="text-[1rem] md:text-[1.2rem] text-[#757569] text-center"
          >
            Nombre:
          </label>
          <input 
            required
            id='name'
            name='name'
            type="text"
            placeholder='Ingresa tus nombres'
            className={`w-full p-2 rounded-sm bg-[#3d3d52] text-white placeholder-[#6f6d68] border-b-2  outline-none focus:outline focus:outline-[#279199] focus:border-b-0 ${ emptyName ? 'border-red-500' : 'border-white' }`}
            value={presupuesto.name}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col items-start space-y-5 p-5">
          <label 
            htmlFor="presupuest"
            className="text-[1rem] md:text-[1.2rem] text-[#757569] text-center"
          >
            Presupuesto:
          </label>
          <input 
            id='monto'
            name='monto'
            type="number"
            value={presupuesto.monto}
            className="w-full p-2 rounded-sm bg-[#3d3d52] text-white placeholder-[#6f6d68] border-b-2 border-white outline-none focus:outline focus:outline-[#279199] focus:border-b-0"
            onChange={handleChange}
          />
        </div>
      </div>
      <input 
        type="submit"
        className="w-full p-2 bg-gradient-to-r from-[#572EF1] to-[#249794] mt-10 text-white cursor-pointer disabled:opacity-20"
        disabled={isValid}
      />
    </form>
  )
}
