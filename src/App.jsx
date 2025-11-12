import './App.css'

function FormularioDeEvento(){
    return (
        <form className='formulario-evento'>
            <h2>Preencha para criar um evento:</h2>
            <fieldset>
                <label htmlFor="inputNome">Qual o nome do evento?</label>
                <input type="text" id="inputNome" placeholder="Summer dev hits"/>
            </fieldset>
            <fieldset>
                <label htmlFor="inputNome">Data do evento</label>
                <date id="inputData"/>
            </fieldset>
            <fieldset>
                <label htmlFor="inputNome">Tema do evento</label>
                <select name="" id="">
                    <option value="teste">Teste</option>
                </select>
            </fieldset>
        </form>
    )
}

function App() {
  return (
    <main>
        <header><img src="/logo.png" alt=""/></header>
        <section><img src="/banner.png" alt=""/></section>
        <FormularioDeEvento/>
    </main>
  )
}

export default App
