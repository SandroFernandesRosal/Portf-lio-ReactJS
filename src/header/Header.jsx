import React from "react"
import "./Header.css"
import { Card } from "./card"
import FotoPerfil from "./img/foto-perfil.jpg"
import Logo from "./img/logo-11.png"
import { MenuMobile } from "./MenuMobile"
import { useState, useRef } from "react"
import {AiOutlineClose} from "react-icons/ai"
import {GiHamburgerMenu} from "react-icons/gi"
import { Link } from "react-router-dom"



export const Header = () => {

  const [showMenu, setShowMenu] = useState(false)
  const [hidenav , setHideNav] = useState(true)


 
  return(
   <header className="header" >

    {hidenav && 
       <nav className="nav" >

       
          <div className="logo"><Link to="/">
            <img src={Logo} />
            </Link></div>
       
             <button className="botao-menu">
              <GiHamburgerMenu onClick={() => {setShowMenu(true); setHideNav(false)} }  />
             </button> 
     
       </nav>
       }

             { showMenu &&
                <ul className="menu-mobile" onClick={() => { setShowMenu(false); setHideNav(true) }}>
                  <button className="botao-menu">
                    <AiOutlineClose onClick={() => setShowMenu(false)}  />
                  </button>

                  <Card img={FotoPerfil} title="Desenvolvedor Front-End JR" cidade="Rio de Janeiro, RJ" nome="Sandro Fernandes"/>

             <MenuMobile/>
             
</ul> }
   

   </header>
  )

}