import Task from "../models/Task"

export const tasksInitialState = [];

export const TASKS_ACTION_TYPES = {
    ADD_TO_LIST: "ADD_TO_LIST",
    REMOVE_FROM_LIST: "REMOVE_FROM_LIST",
    CLEAR_LIST: 'CLEAR_LIST',
    ASSIGN_TASK_COMPLETED: 'ASSIGN_TASK_COMPLETED'
}

export const tasksReducer = (state, action) => {
    const { type: actionType, payload: actionPayload } = action
    
    switch (actionType){
        case TASKS_ACTION_TYPES.ADD_TO_LIST: {
            const newTask = new Task(actionPayload)
            const newList = [...state, newTask]
            return newList
        }

        case TASKS_ACTION_TYPES.REMOVE_FROM_LIST: {
            const { id } = actionPayload
            const newState = state.filter(item => item.id !== id)
            return newState
        }

        case TASKS_ACTION_TYPES.CLEAR_LIST: {
            return []
        }

        case TASKS_ACTION_TYPES.ASSIGN_TASK_COMPLETED: {
            const { id } = actionPayload
            const newTasks = state.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        checked: !item.checked,
                        fechaTachado: !item.checked ? `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}` : null
                    }
                }
            })
            
            return newTasks
        }
    }

    return state
}