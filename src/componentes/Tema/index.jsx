import './tema.estilos.css'

export function Tema({nome}) {
    return (
        <section>
            <h3 className="titulo-tema">{nome}</h3>
        </section>
    )
}