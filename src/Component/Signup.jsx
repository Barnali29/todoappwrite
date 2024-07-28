
import { useForm } from 'react-hook-form'
import { Input, Button } from './index';
import Auth from '../Appwrite/Auth'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../Store/Authslice';
function Signup() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const signup = async (data) => {
    try {
      const session = await Auth.createAccount(data);
      console.log("signup", data);
      if (session) {
        const userdata = await Auth.getUser();
        if (userdata) {
          dispatch(login({ userdata }));
        console.log("Signup done");
        }
        navigate('/');
      }
    } catch (error) {
      throw error;
    }
  }
  return (
    <>
    <form onSubmit={handleSubmit(signup)}>
     <div className='mx-auto w-full max-w-lg  rounded-xl p-10 border border-black/10 
       shadow-xl '>  
        <h1 className='text-3xl font-semibold'>Signup</h1>
       <div className='relative mt-6'>
       <Input  type="text" placeholder="name" title="Full name"
       className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 
       placeholder:text-transparent
       focus:border-gray-500 focus:outline-none"
        {...register("name", {
          required: true,
        })} /></div> 

        <div className='relative mt-6'>
        <Input placeholder="email" type="email" title="Email Address"
        className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
         {...register("email", {
          required: true,
        })} />
        </div>

        <div className=' relative mt-6'> 
        <Input placeholder="password" type="password" title="Password"
        className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-700 focus:outline-none"
        {...register("password", {
          required: true,
        })} />
        </div>
      
        <Button className='w-full rounded-md bg-black text-white px-3 py-4 mt-6'>Create Account</Button>
       
     
      </div>
      </form>
    </>
  )
}

export default Signup