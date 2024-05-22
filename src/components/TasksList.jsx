import { useTasks } from "../hooks/useTasks"
import { Task } from "./Task"


export function TasksList () {
    const { tasks } = useTasks()

    return (
        <ul>
            {
                tasks.map((element, index) => (
                    <Task key={index} content={element}/>
                ))
            }
        </ul>
    )
}