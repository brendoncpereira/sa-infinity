import React from 'react';
import '../styles/register.css';
import illustration from '../assets/illustration-register.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faCalendarMinus } from '@fortawesome/free-solid-svg-icons';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { logDOM } from '@testing-library/react';

const cpfNumbVal = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    cpf: yup.string().min(11).matches(cpfNumbVal, 'Cpf inválido').required(),
    date: yup.string().min(10).required()
    
  }).required();


const Register = (props) => {

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

                            <p className='rt-title'>Vamos começar!</p>
                            <p className='rt-subtitle'>Preencha os campos abaixo.</p>

                        </div>



                        <form className='input-wrapper' onSubmit={handleSubmit(onSubmit)}>

                            <div className='input-box-wrapper'>



                                <div className='input-box'>
                                    <label>Nome:</label>

                                    <div className='input-icon-box'>
                                        <FontAwesomeIcon className='span' icon={faUser} />
                                        <input type='text' name='first-name' placeholder='ex: João' {...register("firstName", { required: true })} />

                                        {errors.firstName && <span>Campo obrigatório</span>}

                                    </div>


                                </div>



                                <div className='input-box'>
                                    <label>Sobrenome:</label>

                                    <div className='input-icon-box'>
                                        <FontAwesomeIcon className='span' icon={faUser} />
                                        <input type='text' name='last-name' placeholder='ex: Clayton' {...register("lastName", { required: true } )} />
                                        {errors.lastName && <span>Campo obrigatório</span>}
        
                                    </div>

                                </div>


                                <div className='input-box'>
                                    <label>CPF:</label>

                                    <div className='input-icon-box'>
                                        <FontAwesomeIcon className='span' icon={faIdCard} />
                                        <input type='text' placeholder='ex: 99999999999' maxLength={11} {...register("cpf", { required: true })}/>
                                        {errors.cpf && <span>Campo obrigatório</span>}
                                    </div>





                                </div>

                                <div className='input-box'>
                                    <label>Data de nascimento:</label>

                                    <div className='input-icon-box'>
                                        <FontAwesomeIcon className='span' icon={faCalendarMinus} />

                                        <input type='date' {...register("date", { required: true })}/>
                                        {errors.date && <span>Campo obrigatório</span>}
                                    </div>



                                </div>
                            </div>

                            
                            <div className='btn-wrapper'>
                                <button type='submit'>Continuar</button>
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

export default Register;