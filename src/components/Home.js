import React from 'react';
import '../styles/home.css';
import logo from '../assets/logo.svg';
import {Link} from 'react-router-dom';




const Home = () => {
    return(
            <body className='body-home'>
                <header className='header-home'>
                   <img src={logo}/>

                
                   <h2>Junte-se a nós nesse conhecimento sem fim!</h2>

                
                </header>

                <main className='main-home'>

                    <div className='wrapper-home'>
                        <div className='lf-box-home'>
                            <div className='wrap-content-home'>
                           
                            <h1>Aluno</h1>
                            
                            <div className='p-container-home'>
                            <p>Encontre um professor que te auxilie nos estudos nas disciplinas de sua escolha.</p>
                            </div>
                            <div className='btn-wrapper-home'>

                                    <Link to="/Register">
                                    <button id='button'>Entrar</button>
                                    </Link> 
                                </div>
                                
                            </div>
                        </div>

                        <div className='rt-box-home'>
                        
                        <div className='wrap-content-home'>
                                    <h1>Professor</h1>
                                    <div className='p-container-home'>
                                    <p>Contribua de forma voluntária no aprendizado de estudantes de todo o país.</p>
                                    </div>
                                    
                                    <div className='btn-wrapper-home'> 
                                    
                                    <Link to="/Register">
                                    <button id='button'>Entrar</button>
                                    </Link> 
                                    
                                    
                                </div>
                         </div>
                        </div>
                    </div>
                    </main>
            </body>
    )
}

export default Home

