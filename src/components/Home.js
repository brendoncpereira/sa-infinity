import React from 'react';
import '../styles/home.css';
import logo from '../assets/logo.svg';

const Home = () => {
    return(
            <body>
                <header>
                   <img src={logo}/>

                   <h2>Escolha como você gostaria de se cadastrar.</h2>
                </header>

                <main>

                    <div className='wrapper'>
                        <div className='lf-box'>
                            <div className='wrap-content'>
                           
                            <h1>Aluno</h1>

                            <p>Encontre um professor que te auxilie nos estudos nas disciplinas de sua escolha.</p>

                            <div className='btn-wrapper'> 
                                    <button>Entrar</button>
                                </div>
                                
                            </div>
                        </div>

                        <div className='rt-box'>
                        
                        <div className='wrap-content'>
                                    <h1>Professor</h1>

                                    <p>Contribua de forma voluntária no aprendizado de estudantes de todo o país.</p>

                                    <div className='btn-wrapper'> 
                                    <button>Entrar</button>
                                </div>
                         </div>
                        </div>
                    </div>
                    </main>
            </body>
    )
}

export default Home