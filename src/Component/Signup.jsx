
import { useForm } from 'react-hook-form'
import { Input, Button } from './index';
import Auth from '../Appwrite/Auth'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../Store/Authslice';
function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const signup = async (data) => {
    try {
      const session = await Auth.createAccount(data);
      console.log("signup", data);
      if (session) {
        const userdata = await Auth.getUser();
        if (userdata) 
          dispatch(login({ userdata }));
        navigate('/');
      }
    } catch (error) {
      throw error;
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit(signup)}>
        <h1>Signup</h1>
        <Input placeholder="name" type="text" {...register("name", {
          required: true,
        })} />
        <Input placeholder="email" type="email" {...register("email", {
          required: true,
        })} />
        <Input placeholder="password" type="password" {...register("password", {
          required: true,
        })} />
        <Button>Create Account</Button>
      </form>
    </>
  )
}

export default Login