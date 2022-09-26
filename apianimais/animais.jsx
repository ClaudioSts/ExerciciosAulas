import { useState } from "react"

export function ListaAnimais({ animais }) {
    const [state, setState] = useState(animais.map(animal => ({ content: animal, done: false, editing: false })))

    const handleChecked = (index, checked) => {
        setState((prevState) => {
            return prevState.map((animal, i) => i === index ? ({ ...animal, done: checked }) : animal)
        })
    }
    const handleEdit = (index) => {
        setState((prevState) => {
            return prevState.map((animal, i) => i === index && !animal.done ? ({ ...animal, editing: !animal.editing }) : ({ ...animal, editing: false }))
        })
    }
    const handleChange = (text, index) => {
        setState((prevState) => {
            return prevState.map((animal, i) => i === index && !animal.done ? ({ ...animal, content: text }) : animal)
        })
    }
    const disableEditing = () => {
        setState((prevState) => {
            return prevState.map((animal, i) => ({ ...animal, editing: false }))
        })
    }
    const addElement = () => {
        setState((prevState) => {
            return prevState.map(t => ({ ...t, editing: false })).concat({ content: "a", done: false, editing: true })
        })
    }

    return (
        <div
            onClick={() => disableEditing()}
        >
            <ul>
                {
                    state.map((animal, i) => (
                        <div key={`${i}`}>
                            <li>
                                {
                                    animal.editing ?
                                        <div onClick={(e) => { e.stopPropagation(); e.nativeEvent.stopImmediatePropagation() }}>
                                            <input
                                                onKeyDown={(e) => e.key === "Enter" ? handleEdit(i) : null}
                                                autoFocus
                                                value={animal.content}
                                                onChange={e => handleChange(e.target.value, i)}
                                                type={"text"}
                                            />
                                        </div>
                                        :
                                        <div onClick={(e) => { e.stopPropagation(); e.nativeEvent.stopImmediatePropagation() }}>
                                            <input onChange={(e) => handleChecked(i, e.target.checked)} checked={animal.done} type={"checkbox"} />
                                            <span onClick={() => handleEdit(i)} className={animal.done ? styles.done : ""}>{animal.content}</span>
                                        </div>
                                }
                            </li>
                        </div>
                    ))
                }
            </ul>
            <button onClick={(e) => { addElement(); { e.stopPropagation(); e.nativeEvent.stopImmediatePropagation() } }}>CLICA</button>
        </div>
    )
}


export default ListaAnimais