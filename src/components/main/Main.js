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
       </ div>
    )
}

export default Main