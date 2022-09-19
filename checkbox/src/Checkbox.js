import { useState } from "react"


export default function Checkbox() {

    const [state, setState] = useState(true)
    const handleChange = () => {
        if (state == true){
            setState = false
        } else if (state == false) {
            setState = true
        }
    }
    function changeText() {
        if (state == true){
            return <p>Ativo</p>
        } else if (state == false) {
            return <p>Inativo</p>
        }
    }

return (
    <div>
        
        <button onMouseDown={handleChange}>Mudar state</button>
        <p>{state}</p>
    </div>
)

}