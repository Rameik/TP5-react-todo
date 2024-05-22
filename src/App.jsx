import './App.css'
import { Form } from './components/Form'
import { TasksList } from './components/TasksList'
import { DeleteAllButton } from './components/DeleteAllButton'

function App() {

  return (
    <>
      <Form/>
      <TasksList/>
      <DeleteAllButton/>
    </>
  )
}

export default App
