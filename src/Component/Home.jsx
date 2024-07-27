import React, { useEffect, useState } from 'react'
import Service from '../Appwrite/Service'
import { useSelector } from 'react-redux';
import {useForm} from 'react-hook-form'
import { json, Outlet } from 'react-router-dom';
import {Input,Button} from '../Component';
import {Todos} from '../Component';
import Auth from '../Appwrite/Auth';
function Home() {
    const authStatus=useSelector((state)=>state.auth.status);
    const[items,setitems]=useState([]);
    const[input,setinput]=useState('')
    //const{register,handleSubmit}=useForm()
 /*   useEffect(()=>{
      Service.getAlldocument()
      .then(
      (item)=>setitems(item.documents)
      )
      .catch((error)=>console.log(error))
    },[items])*/
    async function add(){
      console.log(input);
      try {
        const userid=await Auth.getUserId();
       
     const doc=await Service.addDocumentToUserCollection(userid,input);
       if(doc) console.log("sucessfully added data");
      } catch (error) {
        throw error;
      }
      setinput('');
    }
    if(!authStatus) return <div>Please login/signup to add task</div>
  return (
    <>
    <div >
      <h2 className='font-serif font-extrabold'>Task Manager</h2>
     
      <input type='text' placeholder='enter task' value={input} onChange={(e)=>{setinput(e.target.value)}} className='border-2 border-black rounded-lg'/>
      <button onClick={()=>{
       add()
      }} className='rounded-lg bg-purple-950 p-2 m-2 text-cyan-50'>Add</button>
    </div>
   {
    items?.length>0?items.map((item)=>(<Todos todo={item}/>)):null
   }
   <Outlet/>
    </>
  )
}

export default Home