import { useState } from "react"

function JogoDoJoker({ perguntas }) {

    const [score, setScore] = useState(0)
    const [index, setIndex] = useState(0)

    const pontuacao = `A sua pontuação atual: ${score}`


    

    function validateAnswer(chave, questionIndex) {
        const rightAnswer = perguntas[questionIndex].answer === chave
        console.log(chave == rightAnswer)

        setScore (prevScore => rightAnswer ? prevScore + 100 : Math.max(prevScore - 150, 0))
        setIndex (prevIndex => prevIndex +1 )
        
    }

    return (
        <div>
            <div>
                <h1>{perguntas[index].question}</h1>
                {perguntas[index].options.map(elem => (
                    <button
                        key={elem.key}
                        onClick={() => validateAnswer(elem.key, index)}>
                        {elem.text}
                    </button>
                ))}
                
            </div>
            <p>{pontuacao}</p>
        </div>
    )

}

export default JogoDoJoker