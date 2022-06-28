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


const Register = (props) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
        
       
      });

      console.log(errors);

    function onSubmit(userData) {
        console.log(userData);
        
    }



    return (
        <body className='body-reglog'>

            <main className='main-reglog'>
                <div className="wrapper-reglog">
                    <div className="lf-box-reglog">
                    <p className='welcome-title-reglog'>We are <span>Infinity.</span> </p>
                        <img src={illustration}/>
                        <p className='subtitle-reglog'>Infinity</p> 
                    </div>

                    <div className="rt-box-reglog">

                        <div className='container-title-reglog'>

                            <p className='rt-title-reglog'>Vamos começar!</p>
                            <p className='rt-subtitle-reglog'>Preencha os campos abaixo.</p>

                        </div>



                        <form className='input-wrapper-reglog' onSubmit={handleSubmit(onSubmit)}>

                            <div className='input-box-wrapper-reglog'>



                                <div className='input-box-reglog'>
                                   

                                    <div className='input-icon-box-reglog'>
                                        <FontAwesomeIcon className='span' icon={faUser} />
                                        <input type='text' name='first-name' placeholder='Nome' {...register("firstName", { required: true })} style={{ border: errors.firstName?.message ? '1px solid red' : '' }} />

                                        { <span>{errors.firstName?.message}</span>}

                                    </div>


                                </div>



                                <div className='input-box-reglog'>
                                   

                                    <div className='input-icon-box-reglog'>
                                        <FontAwesomeIcon className='span' icon={faUser} />
                                        <input type='text' name='last-name' placeholder='Sobrenome' {...register("lastName", { required: true } )} style={{ border: errors.lastName?.message ? '1px solid red' : '' }} />
                                         <span>{errors.lastName?.message}</span>
        
                                    </div>

                                </div>


                                <div className='input-box-reglog'>
                                    
                                    <div className='input-icon-box-reglog'>
                                        <FontAwesomeIcon className='span' icon={faEnvelope} />
                                        <input type='text' placeholder='Email'   {...register("email", { required: true })} style={{ border: errors.email?.message ? '1px solid red' : '' }} />
                                         <span>{errors.email?.message}</span>
                                    </div>





                                </div>

                                <div className='input-box-reglog'>
                                  
                                    <div className='input-icon-box-reglog'>
                                        <FontAwesomeIcon className='span' icon={faLock} />

                                        <input type='password' placeholder='Senha' {...register("password", { required: true })} style={{ border: errors.password?.message ? '1px solid red' : '' }} />
                                          <span>{errors.password?.message}</span>
                                    </div>

                                    </div>

                                <div className='input-box-reglog'>
                                   

                                    <div className='input-icon-box-reglog'>
                                        <FontAwesomeIcon className='span' icon={faLock} />

                                        <input type='password' placeholder='Confirme sua senha' {...register("confirmPassword", { required: true })} style={{ border: errors.confirmPassword?.message ? '1px solid red' : '' }} />
                                         <span>{errors.confirmPassword?.message}</span>
                                    </div>

                                    </div>
                            </div>

                            
                            <div className='btn-wrapper-reglog'>
                                <button className='button' type='submit'>Cadastrar</button>
                            </div>

                        </form>

                        <div className='go-login-box'>
                            <p className='go-login'>Já possui conta?  <Link to={"/Login"}>  <span> Faça login. </span> </Link></p>
                        </div>



                    </div>
                </div>
            </main>

        </body>
    )
}

export default Register;