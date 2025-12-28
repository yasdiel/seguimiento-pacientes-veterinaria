export default function Paciente({paciente,setPaciente,eliminarPaciente}){
    const {nombre, alta, propietario, email, sintoma, id} = paciente

    const handleEliminar = () => {
        const respuesta = confirm("Deseas eliminar ese paciente?")
        if(respuesta){
            eliminarPaciente(id)
        }
    }
    return (
        <div className="px-5 py-10 my-5 mx-5 bg-white shadow-md rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: <span className="font-normal normal-case">{paciente.nombre}</span></p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: <span className="font-normal normal-case">{paciente.propietario}</span></p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: <span className="font-normal normal-case">{paciente.email}</span></p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: <span className="font-normal normal-case">{paciente.alta}</span></p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: <span className="font-normal normal-case">{paciente.sintoma}</span></p>
            <div className="flex justify-between">
                <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg" onClick={()=>{ setPaciente(paciente) }}>Editar</button>
                <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg" onClick={handleEliminar}>Eliminar</button>
            </div>
        </div>
    )
    
}