import React, {useState} from 'react';

import '../../styles/main/main.css';
import educatorImg from '../../assets/main/img/educator-bg.png'
import logoFooter from '../../assets/footer/img/logo-footer.png';
import instagram from '../../assets/footer/svg/instagram.svg';
import facebook from '../../assets/footer/svg/facebook.svg';
import twitter from '../../assets/footer/svg/twitter.svg';
import linkedin from '../../assets/footer/svg/linkedin.svg';
import { NavLink } from 'react-router-dom';


const Main = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);


    return(
        <div>
        <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
         <nav className="navbar" onClick={e => e.stopPropagation()}>
           <div className="nav-container">
             <NavLink exact to="/" className="nav-logo">
               CodeBucks
               <i className="fa fa-code"></i>
             </NavLink>
             <ul className={click ? "nav-menu active" : "nav-menu"}>
               <li className="nav-item">
                 <NavLink
                   exact
                   to="/"
                   activeClassName="active"
                   className="nav-links"
                   onClick={click ? handleClick : null}
                 >
                   Home
                 </NavLink>
               </li>
               <li className="nav-item">
                 <NavLink
                   exact
                   to="/Home"
                   activeClassName="active"
                   className="nav-links"
                   onClick={click ? handleClick : null}
                 >
                   About
                 </NavLink>
               </li>
               <li className="nav-item">
                 <NavLink
                   exact
                   to="/Home"
                   activeClassName="active"
                   className="nav-links"
                   onClick={click ? handleClick : null}
                 >
                   Blog
                 </NavLink>
               </li>
               <li className="nav-item">
                 <NavLink
                   exact
                   to="/Home"
                   activeClassName="active"
                   className="nav-links"
                  onClick={click ? handleClick : null}
                 >
                   Contact Us
                 </NavLink>
               </li>
             </ul>
             <div className="nav-icon" onClick={handleClick}>
               <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
             </div>
           </div>
         </nav>
         <footer className='main-footer'>

<div className='main-footer-content'>



<div className='content-section'>
    

    
<div className='wrapper-content-footer'>
        
         
        <h1>Sobre a Infinity</h1>
       
    

    <div className='effect-text-footer-main'>
        <p>Nós acreditamos que a educação move o mundo.
            Por isso, tentamos auxiliar no aprendizado dos estudantes do nosso país.
            Acompanhe nosso trabalho nas redes sociais!
        </p>
    </div>

    <div className='icons-social-media-footer-main'>

            <div className='bg-radius-icons-footer'>
                <img src={instagram} className='social-media'/>
                </div>

            <div className='bg-radius-icons-footer'>
<img src={facebook} className='social-media'/>
</div>

<div className='bg-radius-icons-footer'>
<img src={twitter} className='social-media'/>
</div>

<div className='bg-radius-icons-footer'>
<img src={linkedin} className='social-media'/>
</div>


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
       </ div>
    )
}

export default Main