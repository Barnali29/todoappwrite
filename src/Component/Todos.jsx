import React from 'react'
import {Button} from '../Component'
import { task } from '../Store/Authslice'
import { useDispatch } from 'react-redux'
function Todos({todo}) {
  const dispatch=useDispatch();
function click(e){
  e.preventDefault();
  console.log("delete");
 dispatch(task());
}
  return (
    <div className='rounded-lg bg-sky-800 py-3 mt-4 flex gap-2 w-auto' key={todo.id}>
      <input type='checkbox'/>
      {todo.content}
      <span className='float-right'>
      <button className='p-1 bg-purple-900 rounded-lg m-1 text-cyan-50'>edit</button>
      <button className='p-1 bg-purple-900 rounded-lg text-cyan-50' 
      onClick={(e)=>{
        click(e)}}>delete</button>
      </span>
    </div>
  )
}

export default Todos