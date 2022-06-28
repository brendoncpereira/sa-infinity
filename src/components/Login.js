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
        <body className='body-log'>

            <main className='main-log'>
                <div className="wrapper-log">
                    <div className="lf-box-log">
                    <p className='welcome-title-log'>We are <span>Infinity.</span> </p>
                        <img src={illustration}/>
                        <p className='subtitle-log'>Infinity</p> 
                    </div>

                    <div className="rt-box-log">

                        <div className='container-title-log'>

                            <p className='rt-title-log '>Vamos começar!</p>
                            <p className='rt-subtitle-log'>Preencha os campos abaixo.</p>

                        </div>



                        <form className='input-wrapper-log' onSubmit={handleSubmit(onSubmit)}>

                            <div className='input-box-wrapper-log'>


                         <div className='input-box-log'>
                                    
                                    <div className='input-icon-box-log'>
                                        <FontAwesomeIcon className='span' icon={faEnvelope} />
                                        <input type='text' placeholder='Email'   {...register("email", { required: true })} style={{ border: errors.email?.message ? '1px solid red' : '' }} />
                                         <span>{errors.email?.message}</span>
                                    </div>





                                </div>

                                <div className='input-box-log'>
                                  
                                    <div className='input-icon-box-log'>
                                        <FontAwesomeIcon className='span' icon={faLock} />

                                        <input type='password' placeholder='Senha' {...register("password", { required: true })} style={{ border: errors.password?.message ? '1px solid red' : '' }} />
                                          <span>{errors.password?.message}</span>
                                    </div>

                                    </div>

                               
                            </div>

                            
                            <div className='btn-wrapper-log'>
                                <button className='button' type='submit'>Entrar</button>
                            </div>

                        </form>

                        <div className='go-login'>
                            <p className='go-login'>Não possui login? <Link to={"/Register"}>  <span> Crie sua conta. </span> </Link> </p>
                        </div>



                    </div>
                </div>
            </main>

        </body>
    )
}

export default Login;