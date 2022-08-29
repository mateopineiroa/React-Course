import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from "./components/Header"
import Formulario from "./components/Formulario";
import ListadoPacientes from './components/ListadoPacientes';

function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  const imprimir2mas2 = () => {
    console.log(2+2)
  }

  return (
    <div className="container mx-auto mt-5 w-4/5">     {/* El return de un componente jsx debe ser de solo un contenedor. Puede ser: <></> */}
      <Header 
        numeros={1} 
        fn={imprimir2mas2} 
        isAdmin={false} />
      <div className="mt-12 flex flex-col md:flex-row">
        <Formulario 
          pacientes={pacientes} 
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}/>
          
        <ListadoPacientes 
          pacientes={pacientes} 
          setPaciente={setPaciente} /> 
      </div>

    </div>
  )
}

export default App
