import { useId } from "react"
import { useTasks } from "../hooks/useTasks"
import Task from "../models/Task"


export function Form () {
    const { tasks, setTasks } = useTasks()

    const handleSubmit = (e) => {
        e.preventDefault()
        const { taskText } = Object.fromEntries(new FormData(e.target))
        const newTask = new Task(taskText)
        setTasks([...tasks, newTask])
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="taskText"/>
            <button>Agregar tarea</button>
        </form>
    )
}