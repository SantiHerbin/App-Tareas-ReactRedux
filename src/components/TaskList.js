import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { deleteTask } from '../features/tasks/taskSlice';
import { Link } from 'react-router-dom';
import TaskForm from './TaskForm'

function TaskList() {

  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [pulsado, setPulsado] = useState(false);
  
  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  return (
    <div className="bg-[#a2a8d3] h-screen text-white">
    <div className="flex items-center justify-center h-full">
    <div className='w-4/6'>

      <header className="mb-5 flex justify-between items-center py-4">
        <h1 className='text-black text-xl font-mono'>Tareas Pendientes</h1>

        <Link to='/create-task' className="bg-indigo-600 px-2 py-1 rounded-sm text-sm">
          Create Task
        </Link>
      </header>

      <div className='rounded p-5 grid grid-cols-3 gap-4'>
        {tasks.map(task => (
          <div key={task.id} className="bg-[#38598b] p-4 rounded-md">
              <header className='flex justify-between'>
                  <h3>{task.title}</h3>
                <div className="flex gap-x-2">
                <Link to={`/edit-task/${task.id}`}>
                  <button onClick={ () => setPulsado(!pulsado) }
                    className="bg-zinc-600 px-2 py-1 text-xs rounded-xl"
                  >Edit</button>
                </Link>  
                    <button onClick={() => handleDelete(task.id)}
                      className="bg-red-500 px-2 py-1 text-xs rounded-md self-center"
                    >Delete</button>
                  {
                    pulsado ? (
                      <TaskForm pulsado={pulsado} setPulsado={setPulsado}/>
                    ) :
                    (
                      ''
                    )
                  }
                </div>
                
              </header>
                <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  )
}

export default TaskList