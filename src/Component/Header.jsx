import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../Store/Authslice';
import Auth from '../Appwrite/Auth';
function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    console.log(authStatus);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const navItem = [
        {
            item: 'login', slug: '/login',
            active:!authStatus,
        },
        {
            item: 'signup', slug: '/signup',
            active:!authStatus,
        },

    ]
    return (
        <>
          
            <div className=' flex list-none float-right '>
        {navItem.map((item)=>(

            item.active ?
            <li onClick={()=>navigate(item.slug)} className=' m-2 font-semibold text-xl cursor-pointer' key={item.slug}>
                {item.item}
            </li>
             :null
           ))}
           </div>
         
            {authStatus === true ? <button className='p-2 rounded-md m-2 font-bold' onClick={() => {
                Auth.logout().then(() => {
                    dispatch(logout())
                })
            }}>logout</button> : null
            }

        </>
    )
}

export default Header