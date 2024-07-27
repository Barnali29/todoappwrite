import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import Auth from './Appwrite/Auth'
import { login, logout } from './Store/Authslice'
import { useDispatch } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom';
import { Header } from './Component';

function App() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    Auth.getUser().then((userdata) => {
      console.log("userdata", userdata);
      if (userdata) dispatch(login({ userdata }))
      else dispatch(logout())
    }).finally(() => setLoading(false))
  }, [])
  return (
    <div className='App'>
      <Header />
      {loading ? <div>Loading ...</div> : null}
      <Outlet />
    </div>
  );
}

export default App;
