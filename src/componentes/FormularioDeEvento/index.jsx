import './formulario-de-evento.estilos.css'
import {FormularioTitulo} from "../FormularioTitulo/index.jsx";
import {CampoDeFormulario} from "../CampoDeFormulario/index.jsx";
import {Label} from "../Label/index.jsx";
import {CampoDeEntrada} from "../CampoDeEntrada/index.jsx";


export function FormularioDeEvento(){
    return (
        <form className='formulario-evento'>
            <FormularioTitulo>
                Preencha para criar um evento:
            </FormularioTitulo>
            <CampoDeFormulario>
                <Label htmlFor="inputNome">Qual o nome do evento?</Label>
                <CampoDeEntrada type="text" id="inputNome" placeholder="Summer dev hits" name="nomeEvento"/>
            </CampoDeFormulario>
        </form>
    )
}