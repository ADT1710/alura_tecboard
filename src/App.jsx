import './App.css'
import {FormularioDeEvento} from "./componentes/FormularioDeEvento/index.jsx";
import {Tema} from "./componentes/Tema/index.jsx";
import {Banner} from "./componentes/Banner/index.jsx";
import {useState} from "react";

function App() {
    const temas = [
        { id: 1, nome: 'front-end' },
        { id: 2, nome: 'back-end' },
        { id: 3, nome: 'devops' },
        { id: 4, nome: 'inteligência artificial' },
        { id: 5, nome: 'data science' },
        { id: 6, nome: 'cloud' }
    ];

    const [eventos, setEventos] = useState ([
            {
                id: 1,
                titulo: 'Mulheres no Front',
                data: new Date(),
                descricao: 'Valorizando e impulsionando a participação feminina no desenvolvimento front-end.',
                tema: temas[0],
                imagem: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png'
            }
    ])

    function adicionarEvento (evento){
        // eventos.push(evento)
        // console.log('eventos =>', eventos)
        setEventos([...eventos, evento])
    }

  return (
    <main>
        <header><img src="/logo.png" alt=""/></header>
        <Banner imagem="/banner.png"/>
        <FormularioDeEvento temas={temas} eventos={eventos} aoSubmeter={adicionarEvento}/>

        <div>
            {temas.map(tema =>
                <Tema key={tema.id} nome={tema.nome} eventos={eventos}/>
            )}
        </div>
    </main>
  )
}

export default App
