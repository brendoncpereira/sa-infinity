import React from 'react';
import '../styles/register.css';
import illustration from '../assets/reglog-illustration.svg';
import logoMQ from '../assets/logo-mq.svg';


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

                            <div className='input-box-wrapper'>

                            
                            
                            <div className='input-box'>
                                <label>Nome</label>
                                <input type='text' name='first-name' placeholder='Nome'/>
                            </div>

                               

                             <div className='input-box'>
                             <label>Sobrenome:</label>
                                <input type='text' name='last-name' />
                                
                            </div>
                               
                              
                                <div className='input-box'>
                                <label>CPF:</label>
                                <input type='number' name='cpf' inputmode="numeric" />
                                
                                </div>

                                <div className='input-box'>
                                <label>Data de nascimento:</label>
                                <input type='date' name='bday-date'/>
                                
                                </div> 
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
                                </div>  */}
    
                        </form>
                        
                        <div className='go-login-box'>
                        <p className='go-login'>Já possui conta? Faça login.</p>
                        </div>

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