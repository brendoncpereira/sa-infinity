import React from 'react';
import '../styles/home.css';
import logo from '../assets/logo-vector.svg';

const Home = () => {
    return(
        <body>
            <header>
                <img src={logo}/>
                
                <h3> Escolha como você gostaria de se cadastrar. </h3>
                
            </header>

            <main>
                <section>
                <div className='left-container'></div>
                <div className='right-container'></div>
                </section>
            </main>

            
        </body>
    )
}

export default Home