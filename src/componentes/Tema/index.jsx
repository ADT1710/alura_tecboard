import './tema.estilos.css'
import {CardEvento} from "../CardEvento/index.jsx";

export function Tema({nome, eventos}) {
    return (
        <section>
            <h3 className="titulo-tema">{nome}</h3>
            <CardEvento evento={eventos[0]}/>
        </section>
    )
}