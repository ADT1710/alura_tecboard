import './card-evento.estilos.css'

export function CardEvento({ evento }) {
    return (
        <div className="card-evento">
            <img src={evento.imagem} alt={evento.titulo}/>
            <div className="card-evento_corpo">
                <p className="card-evento_tag">{evento.tema.nome}</p>
                <p className="card-evento_data">{evento.data.toLocaleDateString("pt-BR")}</p>
                <h4 className="card-evento_titulo">{evento.titulo}</h4>
                <p className="card-evento_descricao">{evento.descricao}</p>
            </div>
        </div>
    )
}