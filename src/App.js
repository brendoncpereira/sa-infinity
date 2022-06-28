import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';


const App = () => {
  return(
    <BrowserRouter>
      <Routes>
    
      <Route element={<Home/>} path={"/"} exact/>
        <Route element={<Register/>} path={"/Register"} />
        <Route element={<Login/>} path={"/Login"} />
       
      </Routes>
    </BrowserRouter>
  )
}

export default App