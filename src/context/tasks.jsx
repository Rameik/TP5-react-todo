import { createContext, useReducer } from "react";
import { tasksInitialState, tasksReducer } from "../reducers/tasks";

export const TasksContext = createContext()

function useTasksReducer () {
    const [state, dispatch] = useReducer(tasksReducer, tasksInitialState)

    const addToList = taskText => dispatch({
        type: 'ADD_TO_LIST',
        payload: taskText
    })

    const removeFromList = product => dispatch({
        type: 'REMOVE_FROM_LIST',
        payload: product
    })

    const assignTaskCompleted = product => dispatch({
        type: 'ASSIGN_TASK_COMPLETED',
        payload: product
    })

    const clearList = () => dispatch({ type: 'CLEAR_LIST' })

    return { state, addToList, removeFromList, clearList, assignTaskCompleted }
}

export function TasksProvider ({children}) {
    const { state, addToList, removeFromList, clearList, assignTaskCompleted } = useTasksReducer()

    return (
        <TasksContext.Provider value={{
            tasks: state,
            addToList,
            removeFromList,
            clearList,
            assignTaskCompleted
        }}>
            {children}
        </TasksContext.Provider>
    )
}