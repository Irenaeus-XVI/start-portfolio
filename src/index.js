import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';



const routers = createBrowserRouter([{
  path: '', element: <Layout />, children: [
    { index: true, element: <Home /> },
    { path: 'about', element: <About /> },
    { path: 'portfolio', element: <Portfolio /> },
    { path: 'contact', element: <Contact /> }
  ]

}])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routers}></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
