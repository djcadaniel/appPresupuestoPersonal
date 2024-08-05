import PresupuestoForm from "./components/PresupuestoForm"
import logo from '/img/logo.png'

function App() {

  return (
    <>
      <div className="w-full max-w-7xl mx-auto p-3 mb-6 md:mb-20 text-white bg-[#2B2B3B] flex justify-center md:justify-start items-center gap-5 ">
        <img src={logo} alt="logo de presupuesto" className="h-12 md:h-16"/>
        <h1 className="text-xl md:text-3xl font-changa">Presupuesto personal</h1>
      </div>
      <div className="p-5">
        <PresupuestoForm />
      </div>
    </>
  )
}

export default App