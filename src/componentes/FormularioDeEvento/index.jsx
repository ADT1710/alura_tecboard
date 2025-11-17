import './formulario-de-evento.estilos.css'
import {FormularioTitulo} from "../FormularioTitulo/index.jsx";
import {CampoDeFormulario} from "../CampoDeFormulario/index.jsx";
import {Label} from "../Label/index.jsx";
import {CampoDeEntrada} from "../CampoDeEntrada/index.jsx";
import {Botao} from "../Botao/index.jsx"
import {ListaSuspensa} from "../ListaSuspensa/index.jsx";


export function FormularioDeEvento(){
    return (
        <form className='formulario-evento'>
            <FormularioTitulo>
                Preencha para criar um evento:
            </FormularioTitulo>

            <div className="campos">
                <CampoDeFormulario>
                    <Label htmlFor="nomeEvento">Qual o nome do evento?</Label>
                    <CampoDeEntrada type="text" id="nomeEvento" placeholder="Summer dev hits" name="nomeEvento"/>
                </CampoDeFormulario>

                <CampoDeFormulario>
                    <Label htmlFor="dataEevento">Data do evento</Label>
                    <CampoDeEntrada type="date" id="dataEevento" name="dataEevento"/>
                </CampoDeFormulario>

                <CampoDeFormulario>
                    <Label htmlFor="dataEevento">Tema do evento</Label>
                    <ListaSuspensa/>
                </CampoDeFormulario>
            </div>

            <div className="botoes">
                <Botao>Criar evento</Botao>
            </div>

        </form>
    )
}