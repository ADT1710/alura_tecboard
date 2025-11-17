import './App.css'
import {FormularioDeEvento} from "./componentes/FormularioDeEvento/index.jsx";
import {Tema} from "./componentes/Tema/index.jsx";
import {Banner} from "./componentes/Banner/index.jsx";

function App() {
    const temas = [
        { id: 1, nome: 'front-end' },
        { id: 2, nome: 'back-end' },
        { id: 3, nome: 'devops' },
        { id: 4, nome: 'inteligência artificial' },
        { id: 5, nome: 'data science' },
        { id: 6, nome: 'cloud' }
    ];
  return (
    <main>
        <header><img src="/logo.png" alt=""/></header>
        <Banner imagem="/banner.png"/>
        <FormularioDeEvento/>

        <div>
            {temas.map(tema =>
                <Tema key={tema.id} nome={tema.nome}/>
            )}
        </div>
    </main>
  )
}

export default App
