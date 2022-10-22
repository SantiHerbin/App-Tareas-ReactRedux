import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, updateTask } from '../features/tasks/taskSlice';
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: ""
  });

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const tasks = useSelector( state => state.tasks)
  
  const handleChange = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (params.id) {
      dispatch(updateTask(task))
    } else {
      dispatch(addTask({
        ...task,
        id: uuid(),
      }))
    }
    navigate('/')
  }

  useEffect( () => {
    if(params.id)
    setTask(tasks.find( task => task.id === params.id))
  }, [])

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4 mb-2">
      <label htmlFor="Title" className='block text-xs font-bold mb-1'>Tarea:</label>
      <input name="title" className='w-full p-2 rounded-md bg-zinc-600 mb-2' type="text" placeholder="Titulo" onChange={handleChange} value={task.title}/>
      <label htmlFor="Description" className='block text-xs font-bold mb-1'>Descripcion:</label>
      <textarea name="description" className='w-full p-2 rounded-md bg-zinc-600 mb-2' placeholder='Descripcion' onChange={handleChange} value={task.description}></textarea>
      <button className='bg-indigo-600 px-2 py-1 rounded-sm text-sm'>Save</button>
    </form>
  )
}

export default TaskForm