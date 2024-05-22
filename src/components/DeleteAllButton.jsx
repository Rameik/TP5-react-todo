import { useTasks } from "../hooks/useTasks"


export function DeleteAllButton () {
    const { clearList } = useTasks()

    return (
        <button onClick={clearList}>Limpiar lista</button>
    )
}