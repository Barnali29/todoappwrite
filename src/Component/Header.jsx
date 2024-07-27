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
          {
           navItem.map((item)=>(

            item.active ?
            <button onClick={()=>navigate(item.slug)} className='p-2 rounded-md m-2 font-bold' key={item.slug}>
                {item.item}
            </button>
             :null
           ))
          }
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