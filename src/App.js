import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Main from './components/main/Main';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
    
      <Route element={<Home/>} path={"/"} exact/>
        <Route element={<Register/>} path={"/Register"} />
        <Route element={<Login/>} path={"/Login"} />
        <Route element={<Main/>} path={"/Main"}/>
       
      </Routes>
    </BrowserRouter>
  )
}

export default App