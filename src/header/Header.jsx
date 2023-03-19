import React from "react";
import "./Header.css";
import { Card } from "./card";
import FotoPerfil from "./img/foto-perfil.png";
import Logo from "./img/logo-11.png";
import { MenuMobile } from "./MenuMobile";
import { useState} from "react";
import {AiOutlineClose} from "react-icons/ai";
import {GiHamburgerMenu} from "react-icons/gi";
import { Link } from "react-router-dom";
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import Switch from "react-switch";



export const Header = ({mudar, tema}) => {

  const [showMenu, setShowMenu] = useState(false)
  const [hidenav , setHideNav] = useState(true)

 

  
  return(
   
   <header className="header" >

    {hidenav && 
       <nav className="nav" >
     
          <div className="logo"><Link to="/">
            <img src={Logo} />
            </Link></div>
           <Switch 
           onChange={mudar}
           checked={tema}
           checkedIcon={<BsFillMoonFill color="#c96dfd"  fontSize="26" />}
           uncheckedIcon={<BsFillSunFill color="yellow" fontSize="26" />}
           className="switch"
           onColor={'#0e0e0e'}
           offColor={'#4F4F4F'}
           onHandleColor={'#fff'}
           offHandleColor={'#fff'}
           activeBoxShadow={'0 0 1px 2px #008000'}
          
           
           />
           
             <button className="botao-menu">
              <GiHamburgerMenu onClick={() => {setShowMenu(true); setHideNav(false)} }  />
             </button> 
     
       </nav>
       
       }

       { showMenu &&
                <ul className="menu-mobile" onClick={() => { setShowMenu(false); setHideNav(true) }}>
            
                 <div className="buttons-menu-mobile">
                     <div className="logo">
                       <Link to="/">
                      <img src={Logo} />
                       </Link>
                     </div>
                     
                  <button className="botao-menu">
                    <AiOutlineClose onClick={() => setShowMenu(false)}  />
                  </button>
            </div>

                  <Card img={FotoPerfil} title="Desenvolvedor Front-End JR" cidade="Rio de Janeiro, RJ" nome="Sandro Fernandes"/>

             <MenuMobile/>
             
</ul> }
             
   

   </header>
   
  )

}