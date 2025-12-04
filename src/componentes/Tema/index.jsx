import './tema.estilos.css'
import {CardEvento} from "../CardEvento/index.jsx";

export function Tema({nome, eventos}) {
    return (
            <section>
                <h3 className="titulo-tema">{nome}</h3>
                {eventos.map(function(evento, index){
                    if (evento.tema.nome !== nome) return null
                    return <CardEvento key={index} evento={evento}/>
                })}
            </section>
    )
}