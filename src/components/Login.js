import React from 'react';
import '../styles/login.css';
import illustration from '../assets/illustration-register.png';
import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { logDOM } from '@testing-library/react';


const schema = yup.object({
    email: yup.string().email('Email ou senha inválidos!').required('Email ou senha inválidos!'),
    password: yup.string().required('Email ou senha inválidos!'),
    
  }).required();

const Login = (props) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
        
       
      });


    function onSubmit(userData) {
        console.log(userData);
        
    }



    return (
        <>
        <div className='main-wrapper-aut'>
            
            <div className='left-container-aut'>
                <div className='illustration-aut'>
                    
                </div>

                {/* <div className='title-aut'>
                    <h1>Reiventando a forma de aprender.</h1>
                    
                </div> */}

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

                <form className='form-group-aut' onSubmit={handleSubmit(onSubmit)}>
                    <div className='input-field-aut'>
                    
                   

                    
                    <div className='input-box-aut-lg'>
                    <input type='text' placeholder='Email:' className='input-aut' {...register("email", { required: true })} style={{ borderBottom: errors.email?.message ? '1px solid red' : '' }}/>
                    <span className='span-lg'>{errors.email?.message}</span>
                    </div>
                    
                    <div className='input-box-aut-lg'>
                    <input type='password' placeholder='Senha:' className='input-aut' {...register("password", { required: true })} style={{ color: errors.password?.message ? 'red' : '', borderBottom: errors.password?.message ? '1px solid red' : ''}}/>
                    <span className='span-lg'>{errors.password?.message}</span>
                    </div>
                   
                  
                    

                    </div>
                    
                    <div className='btn-wrapper-aut'>
                    <button className='submit-form-btn-aut' type='submit'>Entrar</button>
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