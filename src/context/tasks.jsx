import { createContext, useState } from "react";

export const TasksContext = createContext()

export function TasksProvider ({children}) {
    const [tasks, setTasks] = useState([])

    const deleteTask = (task) => {
        setTasks(prevState => prevState.filter(element => element.id != task.id))
    }

    const assignTaskCompleted = (task) => {
        setTasks(prevState => (
            [
                ...prevState,
                {
                    ...previous,
                    fechaTachado: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
                    checked: true
                }
            ]
        ))
        console.log(tasks)
    }

    return (
        <TasksContext.Provider value={{
            tasks,
            setTasks,
            deleteTask,
            assignTaskCompleted
        }}>
            {children}
        </TasksContext.Provider>
    )
}