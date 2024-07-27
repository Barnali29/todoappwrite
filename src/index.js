import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Store/Store'
import Loginpage from './Page/Loginpage'
import {Home} from './Component'
import { BrowserRouter, createBrowserRouter,Route,RouterProvider, Routes } from 'react-router-dom';
import SignupPage from './Page/SignupPage';
import {Login,Signup} from './Component'
const router=createBrowserRouter(
  [
    {path:'/',
      element:<App/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },{
          path:'/login',
          element:<Login/>
        },
        {
          path:'/signup',
          element:<Signup/>
        },
      ],  
    },
  ]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
      <RouterProvider router={router}/>
 </Provider>
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
