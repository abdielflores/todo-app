import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>TODO APP</h1>
        <div className='mb-3 d-flex'>
          <input 
            className='form-control' 
            placeholder='Escribe la tarea por hacer...'
          />
          <button><i className="fa-solid fa-plus"></i></button>
        </div>

        <h5>Listado de tareas</h5>
        <div className="card">
          Tarea 1
          <div className='d-flex justify-content-evenly'>
            <button><i className="fa-solid fa-trash"></i></button>
            <button><i className="fa-solid fa-edit"></i></button>
          </div>
        </div>
        <div className="card">
          Tarea 2
          <div className='d-flex justify-content-evenly'>
            <button><i className="fa-solid fa-trash"></i></button>
            <button><i className="fa-solid fa-edit"></i></button>
          </div>
        </div>
    </>
  )
}

export default App
