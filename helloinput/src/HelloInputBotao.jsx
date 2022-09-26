import { useState } from "react"

export default function HelloInput() {

    const [message, setMessage] = useState('')
    const [click, setClick] = useState(false)


    return (
        <div>
            <input
                onChange={(ele) => setMessage(ele.target.value)}
                value={message}
                type={"text"} />
            {click == false ? (
                <button onClick={() => setClick(true)}>Apresentar</button>
            ) : (
                <p>Hello, {message}!</p>
            )}
        </div>
    )
}