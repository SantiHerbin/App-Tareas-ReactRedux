import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from '../features/tasks/taskSlice';
import { v4 as uuid } from 'uuid';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';


function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: ""
  });

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const tasks = useSelector( state => state.tasks)
  
  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (params.id) {
      dispatch(editTask({ ...task, id: params.id}))
    } else {
      dispatch(addTask({
        ...task,
        id: uuid(),
      }))
    }
    navigate("/")
  }

  useEffect(() => {
    if(params.id) {
    setTask(tasks.find( task => task.id === params.id))
  }
  }, [params, tasks])

  return (
    <>
      <Overlay>
          <Link></Link>
          <Modal>
          <form onSubmit={handleSubmit} className="">
            <label htmlFor="Title" className='block text-xs font-bold mb-1'>Tarea:</label>
            <input name="title" className='w-full p-2 rounded-md bg-zinc-600 mb-2' type="text" placeholder="Titulo" onChange={handleChange} value={task.title}/>
            <label htmlFor="Description" className='block text-xs font-bold mb-1'>Descripcion:</label>
            <textarea name="description" className='w-full p-2 rounded-md bg-zinc-600 mb-2' placeholder='Descripcion' onChange={handleChange} value={task.description}></textarea>
            <button type="submit" className='bg-indigo-600 px-2 py-1 rounded-sm text-sm'
            >Save
            </button>
          </form>
          </Modal>         
      </Overlay>
    </>
  )


}


const Overlay = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);

`;

const Modal = styled.div`
    height: auto;
    width: 350px;
    background: #fff;
    position: relative;
    padding: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
    border-radius: 5px;
    box-shadow: rgba(100,100,111, 0.2) 0px 7px 29px 0px;
`;

export default TaskForm

