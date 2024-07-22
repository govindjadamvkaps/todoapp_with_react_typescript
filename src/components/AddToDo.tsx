import { FormEvent, useState } from 'react'
import { useTodos } from '../store/todos'

const AddToDo = () => {
    const [todo, setTodo] = useState("")
    const {handleAddToDo} = useTodos()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        console.log(todo)
        handleAddToDo(todo)
        setTodo("")
    }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" value={todo} id="" required onChange={(e) => setTodo(e.target.value)}/>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default AddToDo
