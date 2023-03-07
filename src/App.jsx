import './App.css';
import TaskForm from './components/TaskForm';
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (

          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/create-task' element={<TaskForm/>}/>
              <Route path='/edit-task/:id' element={<TaskForm/>}/>
            </Routes>
          </BrowserRouter>

  );
}

export default App;
