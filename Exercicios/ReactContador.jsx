import { useState } from "react"

function Contador() {
    // const array = useState(0)
    const [contador, setContador] = useState[0] 

    const decrementar = () => {
        setContador ((prevContador) => prevContador - 1)
    }

    const incrementar = () => {
        setContador ((prevContador) => prevContador + 1)
    }

    return (
        <div role = "main">
            <p>{contador}</p>
            <button onClick={incrementar}>+</button>
            <button onClick={decrementar} disabled={contador <= 0}>-</button>
        </div>
    )
}

export default Contador