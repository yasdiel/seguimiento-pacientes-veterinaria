import { useState, useEffect } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes,setPacientes] = useState(()=>{
    try {
      const raw = localStorage.getItem('pacientes')
      return raw ? JSON.parse(raw):[]
    } catch {
      return []
    }
  })
  const [paciente, setPaciente] = useState([])

  

  useEffect(()=>{
    
    localStorage.setItem('pacientes', JSON.stringify( pacientes ))
  },[pacientes])

  const eliminarPaciente = (id) =>{
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-5">
      <Header></Header>
      <div className="mt-12 md:flex">
        <Formulario paciente={paciente}
        setPacientes={setPacientes}
        pacientes={pacientes} setPaciente={setPaciente}>
        </Formulario>
        <ListadoPacientes eliminarPaciente={eliminarPaciente} setPaciente={setPaciente} pacientes={pacientes}></ListadoPacientes>
      </div> 
    </div>
  )
}

export default App
