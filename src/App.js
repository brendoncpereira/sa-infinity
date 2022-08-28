import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Main from './components/main/Main';
// import Formulario from './components/formulario/formulario';
import RegisterDocente from './components/register/RegisterDocente';
import AboutUs from './components/aboutUs/aboutUs';
import LoginDocente from './components/login/LoginDocente';
// import Agenda from './components/aula/Agenda';
// import Class from './components/aula/Class';




const App = () => {
  return(
    <BrowserRouter>
      <Routes>
    
      <Route element={<Home/>} path={"/"} exact/>
        <Route element={<Register/>} path={"/Register"} />
        <Route element={<Login/>} path={"/Login"} />
        <Route element={<Main/>} path={"/Main"}/>
        {/* <Route element={<Formulario/>} path={"/Formulario"}/> */}
        <Route element={<RegisterDocente/>} path={"/RegisterDocente"}/>
        <Route element={<LoginDocente/>} path={"/LoginDocente"}/>
        <Route element={<AboutUs/>} path={"/AboutUs"}/>
        {/* <Route element={<Agenda/>} path={"/Agenda"}/>
        <Route element={<Class/>} path={"/Class"}/> */}



       
      </Routes>
    </BrowserRouter>
  )
}

export default App