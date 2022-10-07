import { useEffect } from "react"

import Paciente from "./Paciente"



function ListadoPacientes({pacientes, setPaciente}) {               //Traigo setPaciente a este componente y se lo mando al componente paciente como prop en el momento de crearlo
  
  console.log(pacientes && pacientes.length)          //Cual es la logica de esto(?)

  useEffect( () => {
    if(pacientes.length != 0)
      console.log("Agregue un paciente")
  }, [pacientes])

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll ">

      { pacientes && pacientes.length ? (
                                          <>    {/* returns fragment */}
                                            <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                                            <p className="text-xl mt-5 mb-10 text-center">
                                              Administra tus {""}                                     {/* Pongo los corchetez para indicar que quiero el ultimo espacio */}
                                              <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                                            </p>
                                        
                                            { pacientes.map((paciente) => {           //KEY INDEX ES MALA PRACTICA!! (si hay dos map, ya no es unico)
                                              return (
                                                <Paciente paciente={paciente} key={paciente.id} setPaciente={setPaciente} />
                                              )
                                            })}
                                          </>
                                        ): (
                                          <>
                                            <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                                            <p className="text-xl mt-5 mb-10 text-center">
                                              No tienes pacientes actualmente {""}
                                              <span className="text-indigo-600 font-bold">agrega pacientes por favor.</span>
                                            </p>
                                          </>
                                          
                                          )}

    </div>
  )
}

export default ListadoPacientes
