import { useEffect, useMemo, useState } from "react"
import PresupuestoForm from "./components/PresupuestoForm"
import logo from '/img/logo.png'
import { usePresupuest } from "./hooks/usePresupuest"
import PresupuestTracker from "./components/PresupuestTracker";
import PresupuestModal from "./components/PresupuestModal";
import ExpenseList from "./components/ExpenseList";
import { IoReloadCircle } from "react-icons/io5";
import { FilterByCategory } from "./components/FilterByCategory";

function App() {
  
  const {state, dispatch} = usePresupuest();
  const [openQuestion, setOpenQuestion] = useState(false)
  const isValidPresupuest = useMemo(() => state.presupuest.monto > 0, [state.presupuest.monto])

  useEffect(() => {
    localStorage.setItem('presupuest', JSON.stringify(state.presupuest))
    localStorage.setItem('expenses', JSON.stringify(state.expenses))
  }, [state])

  console.log(openQuestion)

  const handleReset = () => {
    dispatch({ type:'reset-app' })
    setOpenQuestion(false)
  }

  return (
    <div className="relative">
      <header className="w-full max-w-7xl min-w-[420px] mx-auto p-3 mb-6 md:mb-10 text-white bg-[#2B2B3B] flex justify-center md:justify-start items-center gap-5 ">
        <img src={logo} alt="logo de presupuesto" className="h-12 md:h-16"/>
        <h1 className="text-xl md:text-3xl font-changa">Presupuesto personal</h1>
      </header>
      {isValidPresupuest && 
        <>
          <div className="max-w-7xl min-w-[420px] mx-auto px-5 md:px-2 md:pb-4 text-white font-bold text-xl flex flex-row items-center justify-between">
            <p className="text-2xl">Bienvenido {state.presupuest.name}</p>
            <div className="flex flex-col justify-center items-center gap-8">
              <button className="bg-ping-600 w-full p-2 text-white uppercase font-bold rounded-lg" onClick={()=> setOpenQuestion(true)}>
                <IoReloadCircle
                  className="text-[#50BFBB] hover:text-[#a8ebde] text-5xl md:text-6xl transition duration-500 ease-in-out"
                  />
              </button>
              {
                openQuestion && (
                  <>
                    <div className='absolute top-0 left-0 bottom-0 right-0 bg-black opacity-55 min-h-screen z-10'>
                    </div>
                    <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-auto flex justify-center items-center z-20">
                      <div className=' bg-[#124b49] text-white py-10 px-0 rounded-lg font-bold flex flex-row flex-wrap w-[60%] md:w-[20%]'>
                        <div className='w-full'>
                          <p className='font-bold text-xl mb-4 text-center'>¿Estas seguro de reiniciar?</p>
                        </div>
                        <div className='w-full flex flex-row justify-center items-center'>
                          <button onClick={handleReset} className='bg-[#0f79ab] px-8 py-2 rounded-md text-white mr-4'>Sí</button>
                          <button onClick={()=> setOpenQuestion(false)} className='bg-red-400 px-4 py-2 rounded-md text-white'>Cancelar</button>
                        </div>
                      </div>

                    </div>
                  </>
                )
              }
            </div>
          </div>
        </>
      }
      <div className="max-w-4xl min-w-[420px] mx-auto p-5 md:p-3 text-white">
        {isValidPresupuest ? <PresupuestTracker/> : <PresupuestoForm/>}
      </div>
      {
        isValidPresupuest && (
          <main className="max-w-4xl mx-auto md:py-10">
            <FilterByCategory />
            <ExpenseList />
            <PresupuestModal />
          </main>
        )
      }
    </div>
  )
}

export default App