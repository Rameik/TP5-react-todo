import { useId } from "react"
import { useTasks } from "../hooks/useTasks"
import Task from "../models/Task"


export function Form () {
    const { tasks, setTasks } = useTasks()
    const id = useId()

    const handleSubmit = (e) => {
        e.preventDefault()
        const { taskId, taskText } = Object.fromEntries(new FormData(e.target))
        const newTask = new Task(taskId, taskText)
        setTasks([...tasks, newTask])
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="taskText"/>
            <input type="hidden" name="taskId" value={id}/>
            <button>Agregar tarea</button>
        </form>
    )
}