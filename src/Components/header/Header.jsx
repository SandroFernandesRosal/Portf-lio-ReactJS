import React from "react";
import { Container } from "./styles";

import Logo from "./img/logo-11.png";
import { MenuMobile } from "./MenuMobile";
import { useState} from "react";
import {AiOutlineClose} from "react-icons/ai";
import {GiHamburgerMenu} from "react-icons/gi";
import { Link } from "react-router-dom";
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import Switch from "react-switch";






export const Header = ({ handleChangeTheme, theme }) => {

  const [menu, setMenu] = useState(false);
  const [ icon, setIcon ] = useState(false);

 
  const handleMenu = () => {
    menu === false ? setMenu(true) : setMenu(false);
  }
  
  return(
   <>
   <Container >

    
     
     <Link to="/">
         <img src={Logo} alt="Logo" className="logo"/>
      </Link>

           <Switch 
           onChange={handleChangeTheme}
           checked={theme.title === 'light'}
           checkedIcon={<BsFillMoonFill color="#c96dfd"  fontSize="26" />}
           uncheckedIcon={<BsFillSunFill color="yellow" fontSize="26" />}
           className="switch"
           onColor={'#0e0e0e'}
           offColor={'#4F4F4F'}
           onHandleColor={'#fff'}
           offHandleColor={'#fff'}
           activeBoxShadow={'0 0 1px 2px #008000'}

           />
           
        <button 
         tapy="button" 
         onClick={handleMenu} 
         className="menu">
         {menu ===false ?<GiHamburgerMenu /> : <AiOutlineClose />}
       </button>
    
     
       </Container>

  { menu &&  <MenuMobile handleMenu={handleMenu} /> }
</>
   
  )

}