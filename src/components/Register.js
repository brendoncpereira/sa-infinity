import React from 'react';
import '../styles/register.css';
import illustration from '../assets/illustration-register.png';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { logDOM } from '@testing-library/react';


const schema = yup.object({
    firstName: yup.string().required('O nome é obrigatório!'),
    lastName: yup.string().required('O sobrenome é obrigatório!'),
    email: yup.string().required('O email é obrigatório!').email('O email informado é invalido!'),
    password: yup.string().required('A senha é obrigatória!').min(8, 'A senha é menor que 8 caracteres!'),
    confirmPassword: yup.string().required('Por favor, confirme sua senha!').oneOf([yup.ref('password')], 'As senhas não coincidem!')
    
  }).required();


const Register = () => {

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
                    <h3>Já tem uma conta? 
                        
                        <Link to={'/Login'}>
                        <span>  Faça Login :) </span>
                        </Link>
                    </h3>
                    </div>
                </div>

                <div className='right-container-aut'>

                    <div className='wrapper-form-container-aut'>

                        <div className='form-container-title-aut'>

                        <h1>infinity</h1>
                        <p> Junte-se a nós, crie sua conta.</p>

                        </div>

                    <form className='form-group-aut' onSubmit={handleSubmit(onSubmit)}>
                        <div className='input-field-aut'>
                        
                        <div className='input-box-aut'>
                        <input type='text' placeholder='Nome:' className='input-aut' {...register("firstName", { required: true })} style={{borderBottom: errors.firstName?.message ? '1px solid red' : '' }}  />
                        <span className='span'>{errors.firstName?.message}</span>
                        </div>

                        <div className='input-box-aut'>
                        <input type='text' placeholder='Sobrenome:' className='input-aut' {...register("lastName", { required: true })} style={{ borderBottom: errors.lastName?.message ? '1px solid red' : '' }}/>
                        <span className='span'>{errors.lastName?.message}</span>
                        </div>
                        
                        <div className='input-box-aut'>
                        <input type='text' placeholder='Email:' className='input-aut' {...register("email", { required: true })} style={{ color: errors.email?.message ? 'red' : '', borderBottom: errors.email?.message ? '1px solid red' : '' }}/>
                        <span className='span'>{errors.email?.message}</span>
                        </div>
                        
                        <div className='input-box-aut'>
                        <input type='password' placeholder='Senha:' className='input-aut' {...register("password", { required: true })} style={{ color: errors.password?.message ? 'red' : '', borderBottom: errors.password?.message ? '1px solid red' : '' }}/>
                        <span className='span'>{errors.password?.message}</span>
                        </div>
                       
                        <div className='input-box-aut'>
                        <input type='password' placeholder='Confirme sua senha:' className='input-aut' {...register("confirmPassword", { required: true })} style={{ color: errors.confirmPassword?.message ? 'red' : '', borderBottom: errors.confirmPassword?.message ? '1px solid red' : '' }}/>
                        <span className='span'>{errors.confirmPassword?.message}</span>
                        </div>
                        

                        </div>
                        
                        <div className='btn-wrapper-aut'>
                        <button className='submit-form-btn-aut' type='submit'>Cadastrar</button>
                        </div>

                </form>

                <div className='subtitle-bp-900px-aut'>
                    <h3>Já tem uma conta?  
                        <Link to={'/Login'}>
                        <span>  Faça Login :) </span>
                        </Link> </h3>
                    </div>

                    </div>

                    
                </div>

                
            </div>
        </>
    )
}

export default Register;