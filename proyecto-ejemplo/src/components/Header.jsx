
function Header({numeros, isAdmin, fn}) {     // puedo poner props directamente para recibir el objeto entero, o puedo poner {numeros}, y eso me va a traer el objeto numeros unicamente
    console.log(numeros )
    console.log(isAdmin)
    fn()
    return (
        <>
            <h1 className = "text-4xl font-bold uppercase">Componente Header</h1>           /* Tengo que usar className por que class es palabra reservada de js */
            <h1>Holis, tengo un estilo por alguna razon... Quizas tailwind?</h1>
            <p>Si pongo {"{}"}, entonces lo de adentro se ejecutará como codigo javascript. Excepto condicionales for o while. <br />SE PUEDEN USAR OPERADORES TERNARIOS!</p>
            {/* Si hay alguna etiqueta que no precisa cierre (img, input, br) entonces debe de finalizar con /: <br /> */}
        
            
        
            <h3>Componentes: En realidad no hace falta hacer un componente por archivo. Podes crear todos los componentes en un archivo...(?)</h3>
        </>
    )
}

export default Header