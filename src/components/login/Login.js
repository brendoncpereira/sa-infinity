import React, {useEffect, useState} from 'react';
import '../../styles/login/login.css';
import {Link, BrowserRouter, Route, Navigate} from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { logDOM } from '@testing-library/react';


const schema = yup.object({
    email: yup.string().email('Email ou senha inválidos!').required('Email ou senha inválidos!'),
    senha: yup.string().required('Email ou senha inválidos!'),
    
  }).required();

const Login = (props) => {
      const [email, setEmail] = useState()
      const [senha, setSenha] = useState()
      const [data, setData] = useState([])
      


    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
        
       
      });


      const showBd = async () =>{
          const response = await fetch('http://localhost:3000/api/estudantes')
          const json = await response.json()
          var encontrou = false 
          let userLogado = []

          setData(json)

          for(var i = 0; i<json.data.length; i++){
            if((email == json.data[i].email) && (senha == json.data[i].senha)){
              encontrou = true
              break
            }else{

            }
          }
          if(encontrou){
            userLogado.push(json.data[i])
            localStorage.setItem('User_Logado', JSON.stringify(userLogado))
            window.location.href = 'http://localhost:3001/Teste'
          }else{
            alert('Email ou senha inválidos')
          }
      }

  



    return (
        <>
        <div className='main-wrapper-aut'>
            
            <div className='left-container-aut'>
                <div className='illustration-aut'>
                    
                </div>

                <div className='subtitle-aut'>
                <h3>Ainda não criou sua conta? 
                    
                    <Link to={'/Register'}>
                    <span>  Cadastre-se :) </span>
                    </Link>
                </h3>
                </div>
            </div>

            <div className='right-container-aut'>

                <div className='wrapper-form-container-aut'>

                    <div className='form-container-title-aut'>

                    <h1>infinity</h1>
                    <p> Entre com seus dados.</p>

                    </div>

                <form className='form-group-aut' onSubmit={handleSubmit(showBd)}>
                    <div className='input-field-aut'>
                    
                   

                    
                    <div className='input-box-aut-lg'>
                    <input type='text' placeholder='Email:' className='input-aut' {...register("email", { required: true })} style={{ borderBottom: errors.email?.message ? '1px solid red' : '' }}
                      onChange={(e) => setEmail(e.target.value)}

                    />
                    <span className='span-lg' >{errors.email?.message}</span>
                    </div>
                    
                    <div className='input-box-aut-lg'>
                    <input type='password' placeholder='Senha:' className='input-aut' {...register("senha", { required: true })} style={{ color: errors.senha?.message ? 'red' : '', borderBottom: errors.senha?.message ? '1px solid red' : ''}}
                      onChange={(e) => setSenha(e.target.value)}
                    />
                    <span className='span-lg'>{errors.senha?.message}</span>
                    </div>
                                  

                    </div>
                    
                    <div className='btn-wrapper-aut'>
        
                      
                    <button className='submit-form-btn-aut' type='submit' >Entrar</button>
                  
                    </div>

            </form>
            

            <div className='subtitle-bp-900px-aut'>
                <h3>Ainda não criou sua conta? <span>  Cadastre-se :)</span> </h3>
                </div>

                </div>

                
            </div>

            
        </div>
    </>
    )
}

export default Login;