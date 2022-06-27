import React from 'react';
import '../styles/login.css';
import illustration from '../assets/illustration-register.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";



const schema = yup.object({
    email: yup.string().email('Email ou senha inválidos!').required('Email ou senha inválidos!'),
    password: yup.string().required('Email ou senha inválidos!'),
    
  }).required();


const Login = (props) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'       
        
       
      });

      console.log(errors);

    function onSubmit(userData) {
        console.log(userData);
        
    }



    return (
        <body>

            <main>
                <div className="wrapper">
                    <div className="lf-box">
                    <p className='welcome-title'>We are <span>Infinity.</span> </p>
                        <img src={illustration}/>
                        <p className='subtitle'>Infinity</p> 
                    </div>

                    <div className="rt-box">

                        <div className='container-title'>

                            <p className='rt-title'>Bem-vindo(a) de volta!</p>
                            <p className='rt-subtitle'>Entre com sua conta</p>

                        </div>



                        <form className='input-wrapper' onSubmit={handleSubmit(onSubmit)}>

                            <div className='input-box-wrapper'>


                                <div className='input-box'>
                                    
                                    <div className='input-icon-box'>
                                        <FontAwesomeIcon className='span' icon={faEnvelope} />
                                        <input type='text' placeholder='*Email:'   {...register("email", { required: true })} style={{ border: errors.email?.message ? '1px solid red' : '' }} />
                                        <span>{errors.email?.message}</span>
                                    </div>





                                </div>

                                <div className='input-box'>
                                  
                                    <div className='input-icon-box'>
                                        <FontAwesomeIcon className='span' icon={faLock} />

                                        <input type='password' placeholder='*Senha:' {...register("password", { required: true })} style={{ border: errors.password?.message ? '1px solid red' : '' }} />
                                         <span>{errors.password?.message}</span>
                                    </div>

                                    </div>

                               
                            </div>

                            
                            <div className='btn-wrapper'>
                                <button type='submit'>Logar</button>
                            </div>

                        </form>

                        <div className='go-login-box'>
                            <p className='go-login'>Já possui conta? Faça login.</p>
                        </div>



                    </div>
                </div>
            </main>

        </body>
    )
}

export default Login;