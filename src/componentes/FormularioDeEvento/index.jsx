import './formulario-de-evento.estilos.css'
import {FormularioTitulo} from "../FormularioTitulo/index.jsx";
import {CampoDeFormulario} from "../CampoDeFormulario/index.jsx";
import {Label} from "../Label/index.jsx";
import {CampoDeEntrada} from "../CampoDeEntrada/index.jsx";
import {Botao} from "../Botao/index.jsx"
import {ListaSuspensa} from "../ListaSuspensa/index.jsx";


export function FormularioDeEvento({temas, eventos, aoSubmeter}){

    function aoFormSubmetido(formData){
        const evento = {
            id: eventos.length + 1,
            titulo: formData.get('nomeEvento'),
            data: new Date(formData.get('dataEevento')),
            descricao: '',
            tema: temas.find(tema => tema.id === Number(formData.get('tema'))),
            imagem: formData.get('capa')
        }
        aoSubmeter(evento)
    }

    return (
        <form className='formulario-evento' action={aoFormSubmetido}>
            <FormularioTitulo>
                Preencha para criar um evento:
            </FormularioTitulo>

            <div className="campos">
                <CampoDeFormulario>
                    <Label htmlFor="nomeEvento">Qual o nome do evento?</Label>
                    <CampoDeEntrada type="text" id="nomeEvento" placeholder="Summer dev hits" name="nomeEvento"/>
                </CampoDeFormulario>

                <CampoDeFormulario>
                    <Label htmlFor="capa">Insira o endereço da capa do evento</Label>
                    <CampoDeEntrada type="text" id="capa" placeholder="https://..." name="capa"/>
                </CampoDeFormulario>

                <CampoDeFormulario>
                    <Label htmlFor="dataEevento">Data do evento</Label>
                    <CampoDeEntrada type="date" id="dataEevento" name="dataEevento"/>
                </CampoDeFormulario>

                <CampoDeFormulario>
                    <Label htmlFor="dataEevento">Tema do evento</Label>
                    <ListaSuspensa itens={temas}/>
                </CampoDeFormulario>
            </div>

            <div className="botoes">
                <Botao>Criar evento</Botao>
            </div>

        </form>
    )
}