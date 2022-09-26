import { useState } from "react"

export default function HelloInput() {

    const [message, setMessage] = useState('')

    return (
        <div>
            <input
                onChange={(ele) => setMessage(ele.target.value)}
                value={message}
                type={"text"} />
                <p>Hello, {message}!</p>
        </div>
    )
}