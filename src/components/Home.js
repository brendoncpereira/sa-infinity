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
                <section className='main-section'>
                <div className='left-container'>
                    
                    <div className='wrapper'>
                        
                        <h1 className='title'>Aluno</h1>

                        <div className='first-wrap'>
                        <div className='sec-wrap'>
                            <h3 className='text'>Encontre professores que te auxiliem nos estudos nas disciplinas de sua escolha.</h3>
                        </div>
                    </div>

                        <div className='btn-wrapper'> 
                            <button>Entrar</button>
                        </div>
                    </div>
                </div>

                
        
                <div className='right-container'>
                    
                    <div className='wrapper'>
                        
                        <h1 className='title'>Professor</h1>

                        <div className='first-wrap'>
                        <div className='sec-wrap'>
                            <h3 className='text'>Contribua de forma voluntária no conhecimento de estudantes de todo o país.</h3>
                        </div>
                    </div>
                        
                        
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