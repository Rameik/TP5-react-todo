import { useTasks } from "../hooks/useTasks"

export function Task ({content}) {
    const handleCompletition = () => {
        
    }

    const handleCompletition = () => {
        
    }

    return (
        <li>
            <p>{content.texto}</p>
            <p>Creada: {content.fechaCreado}</p>

            <button onClick={handleCompletition}>Completada</button>
            <button onClick={handleDelete}>Eliminar</button>
        </li>
    )
}