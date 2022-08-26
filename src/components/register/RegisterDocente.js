import React from 'react';
import '../../styles/register/register.css';
import {Link} from 'react-router-dom';
 

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { logDOM } from '@testing-library/react';
 
const RegisterDocente = (props) => {
const handleSubmit = (event) => {
    event.preventDefault();
    const url = 'http://localhost:3000/api/docentes'
    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        nome: event.target.nome.value,
        email: event.target.email.value,
        senha: event.target.senha.value,
        dt_nascimento: event.target.dt_nascimento.value,
        descricao: event.target.descricao.value,
        curriculo: event.target.curriculo.value
      })
    };
   
    fetch(url, options)
      .then(response => {
        console.log(response.status);
      });
  }
 
 
return (
    <div>
        <h1>Cadastrar</h1>
        <button><Link to="/">Ir para a Home</Link></button>
        <form onSubmit={handleSubmit}>
        <input placeholder='nome' name='nome' type='text' required/>
        <input placeholder='email' name='email' type='email' required/>
        <input placeholder='descricao' name='descricao' type='text' required/>
        <input placeholder='data de nascimento' name='dt_nascimento' type='date' required/>
        <input placeholder='senha' name='senha' type='password' required/>
        <h1>Envie seu curriculo abaixo</h1>
        <input name='curriculo'type="file" accept="application/pdf" />
        {/* <input placeholder='id' name='id' type='number' required/> */}
          <button>Enviar</button>
          <h3>Já tem uma conta?  
                        <Link to={'/LoginDocente'}>
                        <span>  Faça Login :) </span>
                        </Link> </h3>
        </form>
    </div>
);
}
export default RegisterDocente
