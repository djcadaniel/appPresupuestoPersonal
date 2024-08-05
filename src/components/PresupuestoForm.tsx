
export default function PresupuestoForm() {
  return (
    <form className="w-full md:w-1/2 mx-auto">
      <div className="bg-[#2B2B3B] rounded-md">
        <div className="flex flex-col items-start space-y-5 p-5">
          <label 
            htmlFor="name"
            className="text-[1rem] md:text-[1.2rem] text-[#757569] text-center"
          >
            Nombre:
          </label>
          <input 
            id='name'
            type="number"
            placeholder='Ingresa tus nombres'
            className="w-full p-2 rounded-sm bg-[#3d3d52] text-white placeholder-[#6f6d68] border-b-2 border-white outline-none focus:outline focus:outline-[#279199] focus:border-b-0"
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
            id='presupuest'
            type="number"
            value='Presupuesto'
            className="w-full p-2 rounded-sm bg-[#3d3d52] text-white placeholder-[#6f6d68] border-b-2 border-white outline-none focus:outline focus:outline-[#279199] focus:border-b-0"
          />
        </div>
      </div>
      <input 
        type="submit"
        className="w-full p-2 bg-gradient-to-r from-[#572EF1] to-[#249794] mt-10 text-white "
      />
    </form>
  )
}
