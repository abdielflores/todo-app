import { useState } from 'react';
import './App.css'

function App() {
  return <>
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
      <div className='row'>
        <div className='col-2'>
          <input
            className='mr-3 form-check-input'
            type="checkbox"
          />
        </div>
        <div className='col-10 tarea-texto'>
          <span className=''>Esta es una de las tarea para las pruebas 1</span>
        </div>
      </div>
      <div className='mt-3 d-flex justify-content-evenly'>
        <button><i className="fa-solid fa-trash"></i></button>
        <button><i className="fa-solid fa-edit"></i></button>
      </div>
    </div>
    <div className="card">
      <div className='row d-flex'>
        <div className='col-2'>
          <input
            className='mr-3 form-check-input'
            type="checkbox"
          />
        </div>
        <div className='col-10 tarea-texto'>
          <span className='tarea-realizada'>Tarea 2</span>
        </div>
      </div>
      <div className='mt-3 d-flex justify-content-evenly'>
        <button><i className="fa-solid fa-trash"></i></button>
        <button><i className="fa-solid fa-edit"></i></button>
      </div>
    </div>
  </>
}

export default App
