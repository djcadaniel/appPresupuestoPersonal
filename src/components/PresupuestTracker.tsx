import { IoReloadCircle } from "react-icons/io5";
import PresupuestAmount from "./PresupuestAmount";

export default function PresupuestTracker() {
  return (
    <div className="relative grid grid-cols-1">
      <div className="grid grid-cols-5 gap-5 items-center justify-center w-full">
        <div className="col-start-1 col-span-2 p-5 bg-[#2B2B3B] shadow-md shadow-gray-600 rounded-lg h-full flex items-center justify-center">
          <img src="/img/grafico.jpg" alt="" className="h-[120px]" />
        </div>
        <div className="col-start-3 col-span-4 gap-3 p-5 rounded-lg bg-[#2B2B3B] h-full flex flex-col items-center justify-center shadow-md shadow-gray-600">
          <PresupuestAmount 
            label = 'Presupuesto'
            amount = {300}
          />
          <PresupuestAmount 
            label = 'Disponible'
            amount = {200}
          />
          <PresupuestAmount 
            label = 'Gastos'
            amount = {100}
          />
        </div>
      </div>
      <div className="absolute right-0 top-0">
        <button className="p-2 text-white uppercase font-bold rounded-lg">
          <IoReloadCircle className="text-[#50BFBB] hover:text-[#a8ebde] text-3xl md:text-5xl transition duration-500 ease-in-out"/>
        </button>
      </div>
    </div>
  )
}