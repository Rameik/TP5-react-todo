import { useTasks } from "../hooks/useTasks"

export function Form () {
    const { addToList, clearList, getFastestTask } = useTasks()

    const handleSubmit = (e) => {
        e.preventDefault()
        const { taskText } = Object.fromEntries(new FormData(e.target))
        addToList(taskText)
    }

    return (
        <div className="header">
            <form onSubmit={handleSubmit}>
                <input type="text" name="taskText"/>
                <button>Agregar tarea</button>
            </form>
            <button onClick={clearList}>Limpiar lista</button>
            <button onClick={getFastestTask}>Marcar la tarea más rápida</button>
        </div>
    )
}