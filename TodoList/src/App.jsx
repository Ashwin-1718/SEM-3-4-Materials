import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(todoString)
      setTodos(todos)
    }
  }, [])

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = () => {
    setshowFinished(!showFinished)
  }

  const handleEdit = (e, id) => {
    let t = todos.find(i => i.id === id)
    setTodo(t.todo)
    let newTodos = todos.filter(item => item.id !== id)
    setTodos(newTodos)
    saveToLS()
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => item.id !== id)
    setTodos(newTodos)
    saveToLS()
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    saveToLS()
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => item.id === id)
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLS()
  }

  return (
    <>
      <Navbar />
      <div className="mx-4 md:container md:mx-auto my-8 rounded-2xl p-6 bg-white shadow-lg min-h-[80vh] md:w-[40%]">
        <h1 className='font-bold text-center text-3xl mb-6 text-violet-800'>📝 iTask - Your Todo Manager</h1>

        {/* Add Todo Section */}
        <div className="addTodo mb-6">
          <h2 className='text-xl font-semibold mb-2'>Add a Todo</h2>
          <div className="flex gap-2">
            <input
              onChange={handleChange}
              value={todo}
              type="text"
              placeholder="What's on your mind?"
              className='w-full rounded-full border border-violet-300 px-5 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500'
            />
            <button
              onClick={handleAdd}
              disabled={todo.length <= 3}
              className='bg-violet-600 hover:bg-violet-700 disabled:bg-violet-400 text-white px-5 py-2 rounded-full font-medium transition'
            >
              Save
            </button>
          </div>
        </div>
        {/* Show Finished Toggle */}
        <div className="flex items-center mb-4">
          <input id='show' onChange={toggleFinished} type="checkbox" checked={showFinished} className='accent-violet-600' />
          <label htmlFor="show" className='ml-2 text-sm text-gray-700'>Show Finished Todos</label>
        </div>

        <hr className="mb-4 border-gray-300" />

        {/* Todo List Section */}
        <h2 className='text-xl font-semibold mb-3'>Your Todos</h2>
        <div className="todos space-y-4">
          {todos.length === 0 && (
            <div className='text-gray-500 text-sm'>No todos to display</div>
          )}

          {todos.map(item => (
            (showFinished || !item.isCompleted) &&
            <div key={item.id} className="flex justify-between items-center bg-violet-50 rounded-lg px-4 py-3 shadow-sm">
              <div className="flex items-center gap-3">
                <input
                  name={item.id}
                  onChange={handleCheckbox}
                  type="checkbox"
                  checked={item.isCompleted}
                  className='accent-violet-600'
                />
                <div className={item.isCompleted ? "line-through text-gray-500" : "text-gray-800"}>
                  {item.todo}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => handleEdit(e, item.id)}
                  className='bg-violet-500 hover:bg-violet-600 text-white p-2 rounded-full transition'
                >
                  <FaEdit />
                </button>
                <button
                  onClick={(e) => handleDelete(e, item.id)}
                  className='bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition'
                >
                  <AiFillDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App