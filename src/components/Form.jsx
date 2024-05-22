import { useTasks } from "../hooks/useTasks"

export function Form () {
    const { addToList } = useTasks()

    const handleSubmit = (e) => {
        e.preventDefault()
        const { taskText } = Object.fromEntries(new FormData(e.target))
        addToList(taskText)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="taskText"/>
            <button>Agregar tarea</button>
        </form>
    )
}