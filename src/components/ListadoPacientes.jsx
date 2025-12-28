import Paciente from "./Paciente"


export default function ListadoPacientes({pacientes,setPaciente,eliminarPaciente}){
    
    return (
        
        <div className="md:h-screen overflow-y-scroll md:w-1/2 lg:w-3/5">
            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">Administra tus <span className="text-indigo-600 font-bold">Pacientes y Citas</span></p>

                    { pacientes.map( (paciente) => {
                        return (
                            <Paciente eliminarPaciente={eliminarPaciente} setPaciente={setPaciente} key={paciente.id} paciente={paciente}></Paciente>
                        )
                    })}
                </>
            ) : <>
                    <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">Comienza agregando pacientes y <span className="text-indigo-600 font-bold">aparecerán en este lugar</span></p>
                </>
            }
            
            

        </div>
    )
}