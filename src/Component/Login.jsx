
import { useForm } from 'react-hook-form'
import { Input, Button } from './index';
import Auth from '../Appwrite/Auth'
import { useDispatch } from 'react-redux';
import { login as AuthLogin } from '../Store/Authslice'
import { useNavigate } from 'react-router-dom';
function Login() {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const login = async (data) => {
        console.log("login", data);
        try {
            const session = await Auth.login(data);
            if (session) {
                const userData = await Auth.getUser();
                if (userData) {dispatch(AuthLogin({ userData }));  console.log("login done");}
                navigate('/');
            }
        }
        catch (error) {
            throw error;
        }
    }
    return (
        <>

            <div className='relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 md:rounded-xl md:px-10'>
                <div className="text-center">
                    <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
                    <p className="mt-2 text-gray-500">Sign in below to access your account</p>
                    <form onSubmit={handleSubmit(login)}>
                    <div className="relative mt-6">
                    <Input type="email" title="Email Address" name="email" id="email" placeholder="Email Address" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"  {...register("email", {
          required: true,
        })} />
                 
                </div>
                <div className="relative mt-6">
                    <Input type="password" title="Password" name="password" id="password" placeholder="Password" className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"{...register("password", {
          required: true,
        })}/>
                   
                </div>
                <div className="my-6">
                    <Button type="submit" className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">Sign in</Button>
                </div>
                <p className="text-center text-sm text-gray-500">Don&#x27;t have an account yet?
                    <a href='./signup'
                        className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">Sign
                        up
                    </a>
                </p>
                    </form>

                </div>
            </div>

        </>
    )
}

export default Login