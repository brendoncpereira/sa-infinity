import React from 'react';
import '../styles/register.css';
import illustration from '../assets/reglog-illustration.svg';
import logoMQ from '../assets/logo-mq.svg';
import Typing from 'react-typing-animation';

 const Register = () => {

    
    return(
        <body>

        <main>
            <div className="wrapper">
                <div className="lf-box">
                    
                    <p className='welcome-title'>We are <span>Infinity.</span> </p>
            </div>

                <div className="rt-box">

                    <div className='container-title'>
                        
                    <p className='rt-title'>Vamos começar!</p>
                    <p className='rt-subtitle'>Preencha os campos abaixo.</p>

                    </div>
                    
                        

                        <form className='input-wrapper'>
                            
                            <div className='input-box'>

                               
                                <input type='text' name='first-name'/>
                                <label>Nome:</label>
                                
                                    
                                </div>

                               

                            <div className='input-box'>
                                <input type='text' name='last-name' />
                                <label>Sobrenome:</label>
                            </div>
                               
                              
                                <div className='input-box'>
                                <input type='number' name='cpf' inputmode="numeric" />
                                <label>CPF:</label>
                                </div>

                                <div className='input-box'>
                                <input type='date' name='bday-date'/>
                                <label>Data de nascimento:</label>
                                </div>

                                {/* <div>
                                <input type='text' name='username' placeholder='Apelido'/>
                                </div>

                                <div>
                                <input type='text' name='email' placeholder='Email'/>

                                </div>

                                 <div>
                                <input type='text' name='password' placeholder='Senha'/>
                                </div>

                                <div>
                                <input type='text' name='password-confirm' placeholder='Confirme senha'/>
                                </div> */}
    
                        </form>

                        <p className='login-rdr'>Já possui conta? Faça login.</p>

                        <div className='btn-wrapper'>
                            <button>Prosseguir</button>
                        </div>
                       
                        </div>
            </div>
        </main>
        
        </body>
    )
}

export default Register;