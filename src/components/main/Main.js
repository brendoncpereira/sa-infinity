import React from 'react';
import '../../styles/main/main.css';
import logoFooter from '../../assets/footer/img/logo-footer.png';
import instagram from '../../assets/footer/svg/instagram.svg';
import facebook from '../../assets/footer/svg/facebook.svg';
import twitter from '../../assets/footer/svg/twitter.svg';
import linkedin from '../../assets/footer/svg/linkedin.svg';


const Main = () => {
    return(
        <div className='main-wrapper'> 
            <nav className='main-nav'>
                                     
            </nav>  

            <div className='container-main'>
                <div className='mini-container-math-main'>
                    
                    <h1>Matemática</h1>

                    <button>Explorar</button>
                </div>

                <div className='mini-container-portuguese-main '>
                    <h1>Português</h1>

                    <button>Explorar</button>
                </div>

                <div className='mini-container-geography-main'>
                    
                    <h1>Geografia</h1>

                    <button>Explorar</button>
                </div>

                <div className='mini-container-physics-main'>
                    <h1>Física</h1>

                    <button>Explorar</button>
                </div>

                <div className='mini-container-chemistry-main'>
                    <h1>Química</h1>

                    <button>Explorar</button>
                </div>

                <div className='mini-container-biology-main'>
                    <h1>Biologia</h1>

                    <button>Explorar</button>
                </div>

                <div className='mini-container-history-main'>
                    <h1>História</h1>

                    <button>Explorar</button>
                </div>

                <div className='mini-container-filosofy-main'>
                    <h1>Filosofia</h1>

                    <button>Explorar</button>
                </div>

                <div className='mini-container-sociology-main'>
                    <h1>Sociologia</h1>

                    <button>Explorar</button>
                </div>
            
                <div className='mini-container-english-main'>
                    <h1>Inglês</h1>

                    <button>Explorar</button>
                </div>


                <div className='mini-container-spanish-main'>
                    <h1>Espanhol</h1>

                    <button>Explorar</button>
                </div>

                <div className='mini-container-redaction-main'>
                    <h1>Redação</h1>

                    <button>Explorar</button>
                </div>

            </div>

            <footer className='main-footer'>

                <div className='main-footer-content'>

               

                <div className='content-section'>

                    <div className='wrapper-content-footer'>

                    <img src={logoFooter} className='logo'/>
                    
                   

                        <div className='effect-text-footer-main'>
                        
                        <p> A educação move o mundo.</p>
                        
                        <p>Acompanhe nossas redes sociais e fique por dentro das novidades!</p>

                        </div>

                        <div className='icons-social-media-footer-main'>
                            <img src={instagram} className='social-media'/>
                            <img src={facebook} className='social-media'/>
                            <img src={twitter} className='social-media'/>
                            <img src={linkedin} className='social-media'/>
                      

                       
                    </div>
                    
                    </div>
                    
                </div>

                <div className='rules-section'>
                        

                        <div className='wrapper-content-footer'>


                        
                            <h2>Product</h2>
                        

                        <ul className='ul-footer'>
                            <li className='li-footer'> <a href='#' className='footer-link'>Theme Design</a> </li>
                            <li className='li-footer'> <a href='#' className='footer-link'>Plugin Desgin</a> </li>
                            <li className='li-footer'> <a href='#' className='footer-link'>Wordpress</a> </li>
                            <li className='li-footer'> <a href='#' className='footer-link'>Joomia Template</a> </li>
                            <li className='li-footer'> <a href='#' className='footer-link'>HTML Template</a> </li>
                        </ul>
                        </div>
                </div>

                <div className='address-section'>

                        <div className='wrapper-content-footer'>
                        
                         
                            <h2>Useful Link</h2>
                        

                        <ul className='ul-footer'>
                            <li className='li-footer'> <a href='#' className='footer-link'>Blog</a> </li>
                            <li className='li-footer'> <a href='#' className='footer-link'>Pricing</a> </li>
                            <li className='li-footer'> <a href='#' className='footer-link'>Sales</a> </li>
                            <li className='li-footer'> <a href='#' className='footer-link'>Tickets</a> </li>
                            <li className='li-footer'> <a href='#' className='footer-link'>Certifications</a> </li>
                        </ul>
                        </div>
                       
                </div>

                <div className='last-section'>
                
                <div className='wrapper-content-footer'>

                    
                        <h2>Adress</h2>
                    
                        

                        <ul className='ul-footer'>
                            <li className='li-footer'> <a href='#' className='footer-link'>127, Westwood Lone</a> </li>
                            <li className='li-footer'> <a href='#' className='footer-link'>DA15 9PS, Sidcup</a> </li>
                            <li className='li-footer'> <a href='#' className='footer-link'>London, UK</a> </li>
                        </ul>
                        </div>
                </div>

                </div>

                <div className='final-footer-text'>
                        <h5>INFINITY© 2022 | Todos os direitos reservados</h5>
                </div>
            </footer>
        </div>
    )
}

export default Main