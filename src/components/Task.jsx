import { useTasks } from "../hooks/useTasks"

export function Task ({content}) {
    const { removeFromList, assignTaskCompleted } = useTasks()

    const checkedStyle = {
        textDecoration: 'line-through'
    }

    const fastestStyle = {
        boxShadow: '1px 2px 10px #444444',
        padding: '3px 15px'
    }

    return (
        <li style={content.fastest ? fastestStyle : {}}>
            <p style={content.checked ? checkedStyle : {}}><b>{content.texto}</b></p>
            <p>Creada: {content.fechaCreado}</p>
            {content.checked && <p>Tachada: {content.fechaTachado}</p>}
            <button onClick={() => assignTaskCompleted(content)}>{!content.checked ? "Completada" : "Por completar"}</button>
            <button onClick={() => removeFromList(content)}>Eliminar</button>
        </li>
    )
}