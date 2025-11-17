import './banner.estilos.css'

export function Banner({ imagem }) {
    return(
        <section className="banner">
            <img src={imagem}/>
        </section>
    )
}