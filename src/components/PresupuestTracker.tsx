import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import PresupuestAmount from "./PresupuestAmount";
import { usePresupuest } from "../hooks/usePresupuest";
import 'react-circular-progressbar/dist/styles.css';
// import RadialSeparators from '../helpers/RadialSeparators';

export default function PresupuestTracker() {

  const {state, totalGastos, disponible} = usePresupuest();
  
  const percentage = +((totalGastos / state.presupuest.monto) * 100).toFixed(2);

  return (
    <div className="grid grid-cols-1">
      <div className="grid grid-cols-5 gap-5 items-center justify-center w-full">
        <div className="col-start-1 col-span-2 p-5 bg-[#2B2B3B] shadow-md shadow-gray-600 rounded-lg h-full flex items-center justify-center">
          <CircularProgressbar
            value={percentage} 
            styles={buildStyles({
              pathColor: percentage === 100 ? '#DC2626' : '#3B82F6',
              trailColor: '#F5F5F5',
              textSize: 8,
              textColor: percentage === 100 ? '#DC2626' : '#3B82F6'
            })}
            text={`${percentage}% gastado`}
          />
            {/* <RadialSeparators
              count={12}
              style={{
                background: "white",
                width: "2px",
                // This needs to be equal to props.strokeWidth
                height: `${10}%`
              }}
            /> */}
          {/* </CircularProgressbarWithChildren> */}
        </div>
        <div className="col-start-3 col-span-4 gap-3 p-5 rounded-lg bg-[#2B2B3B] h-full flex flex-col items-center justify-center shadow-md shadow-gray-600">
          <PresupuestAmount 
            label = 'Presupuesto'
            amount = {state.presupuest.monto}
          />
          <PresupuestAmount 
            label = 'Disponible'
            amount = {disponible}
          />
          <PresupuestAmount 
            label = 'Gastos'
            amount = {totalGastos}
          />
        </div>
      </div>
    </div>
  )
}