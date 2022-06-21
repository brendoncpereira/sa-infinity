import React from 'react';
import '../styles/login.css';
import illustration from '../assets/illustration-register.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const cpfNumbVal = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    cpf: yup.string().min(11).matches(cpfNumbVal, 'Cpf inválido').required(),
    date: yup.string().min(10).required()
    
  }).required();


const Login = (props) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
        
       
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
                                        <input type='text' placeholder='Email'   {...register("cpf", { required: true })}/>
                                        {errors.cpf && <span>Campo obrigatório</span>}
                                    </div>





                                </div>

                                <div className='input-box'>
                                  
                                    <div className='input-icon-box'>
                                        <FontAwesomeIcon className='span' icon={faLock} />

                                        <input type='password' placeholder='Senha' {...register("date", { required: true })}/>
                                        {errors.date && <span>Campo obrigatório</span>}
                                    </div>

                                    </div>

                               
                            </div>

                            
                            <div className='btn-wrapper'>
                                <button type='submit'>Cadastrar</button>
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