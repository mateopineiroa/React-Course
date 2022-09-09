import { useState, useEffect } from "react";
import Error from "./Error.jsx"


const Formulario = ({setPacientes, pacientes, paciente, setPaciente}) => {          /* arrow function */

    //console.log(paciente)     Si lo pongo aca, se re-renderiza cada vez que modifico el valor del formulario

    const [nombre, setNombre] = useState("")       //La declaracion del hook no puede estar dentro de un condicional if
    const [propietario, setPropietario] = useState("")
    const [email, setEmail] = useState("")
    const [fecha, setFecha] = useState("")
    const [sintomas, setSintomas] = useState("")

    const [error, setError] = useState(false)

    useEffect(() => {
        //console.log(paciente)               //Si lo pongo aca, se ejecuta solo cuando el valor de paciente cambia. Como cuando presiono editar, el elemento paciente se modifica, se ejecuta denuevo esta linea de codigo
    }, [paciente])                      //Aqui va la lista de los elementos que van a ejecutar el re-render cuando cambien


    useEffect( () => {
        
    }, [])      //Si paso las dependencias vacias, este useEffect se va a ejecutar solo una vez

    useEffect( () => {
        console.log( Object.keys(paciente).length )         //Object.keys es un metodo que me devuelve un arreglo con las keys de el objeto
        if ( Object.keys(paciente).length != 0 ) {
            setNombre(paciente.nombre)                                //Value de formulario linked with state values. El state paciente se actualiza cada vez que aprieto en editar 
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])




    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)

        return (random + fecha)
    }

    const chequearForm = (e) => {
        e.preventDefault()
        
        //Validacion formulario
        if ([nombre, propietario, email, fecha, sintomas].includes("")) {
            console.log("Hay algun campo vacío")
            setError(true)
        } else {
            console.log("Formulario validado")
            setError(false)



            const objetoPaciente = {       //Nueva forma de hacer un objeto. Ver console.log
                nombre,
                propietario, 
                email, 
                fecha, 
                sintomas
            }
            console.log(objetoPaciente)
            if (paciente.id) {             
                objetoPaciente.id = paciente.id
                const pacientesNuevo = pacientes.map( ( pacient ) => {                                      /* Puede ser operador termario. pacient.id == paciente.id ? objetoPaciente : pacient */
                                                                    
                                                                        if (pacient.id == paciente.id) {
                                                                            return objetoPaciente
                                                                        } else {
                                                                            return pacient
                                                                        }
                                                                    })
                setPacientes(pacientesNuevo)
                setPaciente({})
            } else {
                objetoPaciente.id = generarId()
                setPacientes([...pacientes, objetoPaciente])     //Despues de chequear el formulario lo paso por la funcion setPacientes al app padre. Agrega objetoPaciente a los pacientes, forma oficial de hacerlo. No hay que hacer push!!
            }

            
            //reinicio el form
            setNombre("")
            setPropietario("")
            setEmail("")
            setFecha("")
            setSintomas("")
            
        
        
        }
    }


    return (
        <div className="md:w-1/2 lg:w-2/5 mx-3">
            <h1 className="font-black text-3xl text-center">Seguimiento de Pacientes</h1>
            <p className="text-lg mt-5 mb-10">Añade pacientes y <span className="text-indigo-600 font-bold">adminístralos</span></p>

            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" onSubmit={chequearForm}>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="nombre">Nombre Mascota {nombre}</label>      {/* for es palabra reservada */}
                    <input 
                        type="text" 
                        id="nombre" 
                        placeholder="Nombre de la mascota" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        value= {nombre}
                        onChange= { (e) => setNombre(e.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre Propietario</label>      {/* for es palabra reservada */}
                    <input  type="text" 
                            id="propietario" 
                            placeholder="Nombre del propietario" 
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                            value={propietario} 
                            onChange={ (e) => setPropietario(e.target.value)}/>
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="mail">Email</label>      {/* for es palabra reservada */}
                    <input  type="email" 
                            id="mail" 
                            placeholder="Email del propietario" 
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"  
                            value={email} 
                            onChange={ (e) => setEmail(e.target.value)}/>
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">alta</label>      {/* for es palabra reservada */}
                    <input  type="date" 
                            id="alta" 
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"  
                            value={fecha} 
                            onChange={ (e) => setFecha(e.target.value)}/>
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Sintomas</label>      {/* for es palabra reservada */}
                    <textarea 
                            id="sintomas" 
                            placeholder="Describe los sintomas" 
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"  
                            value={sintomas} 
                            onChange={ (e) => setSintomas(e.target.value)}></textarea>
                </div>
                <input  type="submit" 
                        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" 
                        value={ paciente.id ? "Editar paciente": "Agregar paciente"} />

                {error && 
                    <Error><div className="bg-red-600 text-white text-center p-3 rounded-md mt-3 uppercase font-bold cursor-default"><p>Todos los campos son obligatorios</p></div></Error>}    {/* Que es este operador?? */}                                                       {/* {error?"Hay error":"No hay error"} operador ternario */}
            </form>
        </div>
    );
};


export default Formulario;