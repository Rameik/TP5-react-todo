import './App.css'
import { Form } from './components/Form'
import { TasksList } from './components/TasksList'

function App() {

  return (
    <>
      <h1 style={{textAlign: 'center'}}>To do List</h1>
      <Form/>
      <TasksList/>
    </>
  )
}

export default App
