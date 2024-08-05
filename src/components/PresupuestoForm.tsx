
export default function PresupuestoForm() {
  return (
    <form className="bg-[#2B2B3B]">
      <div className="flex flex-col space-y-5">
        <label 
          htmlFor="presupest"
          className="text-[1rem] md:text-[1.2rem] text-[#757569] text-center"
        >
          Ingresa presupuesto:
        </label>
        <input 
          id='presupuest'
          type="number"
          value='Presupuesto' 
        />
      </div>
      <input 
        type="submit"
      />
    </form>
  )
}
