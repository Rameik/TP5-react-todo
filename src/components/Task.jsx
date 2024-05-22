import { useTasks } from "../hooks/useTasks"

export function Task ({content}) {
    const { deleteTask, assignTaskCompleted } = useTasks()

    const checkedStyle = {
        textDecoration: 'line-through'
    }

    return (
        <li>
            <p className={content.checked ? checkedStyle : {}}><b>{content.texto}</b></p>
            <p>Creada: {content.fechaCreado}</p>
            {content.checked && <p>Tachada: {content.fechaTachado}</p>}
            <button onClick={() => assignTaskCompleted(content)}>Completada</button>
            <button onClick={() => deleteTask(content)}>Eliminar</button>
        </li>
    )
}