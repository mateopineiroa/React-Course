
const Error = ({children}) => {           /* Children puede ser html o texto. Es palabra reservada de react */
  return (
    <div>{children}</div>             /* children contiene a todo lo que esté entre las etiquetas de Error en parent */
  )
}

export default Error;