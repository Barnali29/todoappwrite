import React, { useState } from 'react'
import Service from '../Appwrite/Service'
import { useSelector } from 'react-redux'
import Auth from '../Appwrite/Auth'
function AllTodos() {
    const[todo,Settodo]=useState([])
    const AuthStatus=useSelector(state=>state.auth.status)
    if(!AuthStatus) return null;
    let userid=null
     Auth.getUser().then((user)=>(userid=user.$id)).catch((error)=>console.log(error))
     console.log(userid);
   if(userid) Service.listDocuments(userid).then((doc)=>Settodo((prev)=>[...prev,doc.documents])).catch((error)=>console.log(error))
    console.log(todo);
  return (
   <>
   {todo && todo.length>0?
   console.log(todo)
   :null}
   </>
  )
}

export default AllTodos