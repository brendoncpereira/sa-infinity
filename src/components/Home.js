import React from 'react';
import '../styles/home.css';
import logo from '../assets/logo.svg';

const Home = () => {
    return(
        <body>
            <header>
                <img src={logo}/>
                
                <h3>Escolha como você gostaria de se cadastrar.</h3>
                
            </header>

            <main>
                <section className='main-section'>
                <div className='left-container'>
                    
                    <div className='wrapper'>
                        
                        <h1 className='title'>Aluno</h1>

                      
                            <p className='text'>Encontre professores que te auxiliem nos estudos nas disciplinas de sua escolha.</p>
                        

                        <div className='btn-wrapper'> 
                            <button>Entrar</button>
                        </div>
                    </div>
                </div>

                
        
                <div className='right-container'>
                    
                    <div className='wrapper'>
                        
                        <h1 className='title'>Professor</h1>

                     
                            <p className='text'>Contribua de forma voluntária no conhecimento de estudantes de todo o país.</p>
                      
                        
                        
                        <div className='btn-wrapper'> 
                            <button>Entrar</button>
                        </div>
                    </div>
                </div>
                </section>
            </main>

            
        </body>
    )
}

export default Home