import { useMemo } from "react"
import PresupuestoForm from "./components/PresupuestoForm"
import logo from '/img/logo.png'
import { usePresupuest } from "./hooks/usePresupuest"
import PresupuestTracker from "./components/PresupuestTracker";
import PresupuestModal from "./components/PresupuestModal";
import ExpenseList from "./components/ExpenseList";

function App() {

  const {state} = usePresupuest();
  const isValidPresupuest = useMemo(() => state.presupuest.monto > 0, [state.presupuest.monto])

  return (
    <>
      <header className="w-full max-w-7xl min-w-[420px] mx-auto p-3 mb-6 md:mb-20 text-white bg-[#2B2B3B] flex justify-center md:justify-start items-center gap-5 ">
        <img src={logo} alt="logo de presupuesto" className="h-12 md:h-16"/>
        <h1 className="text-xl md:text-3xl font-changa">Presupuesto personal</h1>
      </header>
      <div className="max-w-7xl min-w-[420px] mx-auto p-3 md:px-44 text-white">
        {isValidPresupuest ? <PresupuestTracker/> : <PresupuestoForm/>}
      </div>
      {
        isValidPresupuest && (
          <main className="max-w-7xl mx-auto py-10">
            <ExpenseList />
            <PresupuestModal />
          </main>
        )
      }
    </>
  )
}

export default App