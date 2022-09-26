import { useState } from "react"

function TwoLists() {
    const [nomes, setNomes] = useState([])
    const [apelidos, setApelidos] = useState([])
    const [input, setInput] = useState('')
    const [randomNome, setRandomNome] = useState('')

    function addItem(lista) {
        if (lista == 'nome') { setNomes((prevNomes) => [...prevNomes, input]) }
        if (lista == 'apelido') { setApelidos((prevApelidos) => [...prevApelidos, input]) }
        setInput('')
    }

    function gerarRandom() {
        const nomeIndex = Math.floor(Math.random() * (nomes.length))
        const apelidoIndex = Math.floor(Math.random() * (apelidos.length))

        setRandomNome(`${nomes[nomeIndex]} ${apelidos[apelidoIndex]}`)
    }

    return (
        <div>
            <input
                value={input}
                type="text"
                onChange={(ele) => setInput(ele.target.value)}
            />
            <button
                onClick={() => addItem('nome')}>
                Adicionar nome
            </button>
            <button
                onClick={() => addItem('apelido')}>
                Adicionar apelido
            </button>
            <div role='list'>
                {nomes.map((ele) => (
                    <span role='listitem'>
                        {ele}</span>
                ))}
            </div>
            <div role='list'>
                {apelidos.map((ele) => (
                    <span role='listitem'>{ele}</span>
                ))}
            </div>
            <div>
                <button onClick={gerarRandom}>
                    Gerar Nome
                </button>
            </div>
            {randomNome && <p role={"name"}>{randomNome}</p>}
        </div>
    )
}

export default TwoLists