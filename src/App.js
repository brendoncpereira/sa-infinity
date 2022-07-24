import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import { ClassList } from './components/ClassList';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
    
      <Route element={<Home/>} path={"/"} exact/>
        <Route element={<Register/>} path={"/Register"} />
        <Route element={<Login/>} path={"/Login"} />
        <Route element={<ClassList/>} path={"/ClassList"}/>
       
      </Routes>
    </BrowserRouter>
  )
}

export default App