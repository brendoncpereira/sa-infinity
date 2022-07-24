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
    firstName: yup.string().required('Campo obrigatório!'),
    lastName: yup.string().required('Campo obrigatório!'),
    email: yup.string().email('O email inserido é inválido!').required('Campo obrigatório!'),
    password: yup.string().min(8, 'A senha deve conter pelo menos oito caracteres!').required('Campo obrigatório!'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'As senhas não coincidem!').required('Campo obrigatório')
    
  }).required();


const Register = () => {
    
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
                    <h3>Já tem uma conta? <span>  Faça Login :)</span> </h3>
                    </div>
                </div>

                <div className='right-container-aut'>

                    <div className='wrapper-form-container-aut'>

                        <div className='form-container-title-aut'>

                        <h1>infinity</h1>
                        <p> Junte-se a nós, crie sua conta.</p>

                        </div>

                    <form className='form-group-aut'>
                        <div className='input-field-aut'>

                        <input type='text' placeholder='Nome:' className='input-aut'/>
                        <input type='text' placeholder='Sobrenome:' className='input-aut'/>
                        <input type='text' placeholder='Email:' className='input-aut'/>
                        <input type='password' placeholder='Senha:' className='input-aut'/>
                        <input type='password' placeholder='Confirme sua senha:' className='input-aut'/>

                        </div>
                        
                        <div className='btn-wrapper-aut'>
                        <button className='submit-form-btn-aut' type='submit'>Cadastrar</button>
                        </div>

                </form>

                <div className='subtitle-bp-900px-aut'>
                    <h3>Já tem uma conta? <span>  Faça Login :)</span> </h3>
                    </div>
                    
                    </div>

                    
                </div>

                
            </div>
        </>
    )
}

export default Register;