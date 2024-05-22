import { useTasks } from "../hooks/useTasks"

export function Task ({content}) {
    const { removeFromList, assignTaskCompleted } = useTasks()

    const checkedStyle = {
        textDecoration: 'line-through'
    }

    return (
        <li>
            <p style={content.checked ? checkedStyle : {}}><b>{content.texto}</b></p>
            <p>Creada: {content.fechaCreado}</p>
            {content.checked && <p>Tachada: {content.fechaTachado}</p>}
            <button onClick={() => assignTaskCompleted(content)}>{content.checked ? "Completada" : "Por completar"}</button>
            <button onClick={() => removeFromList(content)}>Eliminar</button>
        </li>
    )
}