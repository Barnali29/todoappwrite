
import {useForm} from 'react-hook-form'
import {Input,Button} from './index';
import Auth from '../Appwrite/Auth'
import { useDispatch } from 'react-redux';
import {login as AuthLogin} from '../Store/Authslice'
import { useNavigate } from 'react-router-dom';
function Login() {
    const{register,handleSubmit}=useForm();
    const dispatch=useDispatch()
    const navigate=useNavigate()

const login=async(data)=>{
    console.log("login",data);
    try{
        const session=await Auth.login(data);
    if(session){
        const userData=await Auth.getUser();
       if(userData) dispatch(AuthLogin({userData}));
        navigate('/');}
    }
    catch(error){
        throw error;
    }
}
  return (
   <>
   <form onSubmit={handleSubmit(login)}>
    <div className='bg-slate-300'>
    <h1 className='text-xl font-bold'>Login</h1>
  <div>  <Input placeholder="email" type="email" {...register("email",{
        required:true,
    })}/>
    </div>
    <div>
    <Input placeholder="password" type="password" {...register("password",{
        required:true,
    })}/>
    </div>
    <Button className='bg-purple-950 text-white rounded-md p-1 m-1'>Submit</Button>
    </div>
   </form>
   </>
  )
}

export default Login