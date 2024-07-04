import React, {useState} from 'react'
import './ToDoList.css'

export default function ToDoList() {

  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

function add(){
  if(newTask.trim() !== ''){
    setTasks([...tasks, newTask])
    setNewTask('')
  }
}

function handleRemove(index){
  const deleteTask = tasks.filter((_, i) => i !== index)
  setTasks(deleteTask)
}


  return (
    <div className='container fluid to-do-container'>
      <h1>To-Do-List</h1>
      <div className='container fluid d-flex tasks mt-4'>
<input className='form-control input' 
value={newTask}
 placeholder='Enter Any Task'
 onChange={(e) => setNewTask(e.target.value)}/> <button onClick={add} className='button btn btn-primary ms-3'>Add Task</button>
</div>
<div className='div'>
  <ol>
  {
tasks.map((task, index) => 
<div key={index} className='card mt-4'>
  <div className='card-body'>
  
 <li><span className='text'>{task} </span> <button onClick={() => handleRemove(index)} className='btn btn-danger '>Delete</button></li>
    </div>
    </div>
)
}
  </ol>


      </div>
    </div>
  )
}
