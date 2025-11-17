import './formulario-titulo.estilos.css'

export function FormularioTitulo(props){
    return(
        <h2 className="titulo-form">{props.children}</h2>
    )
}