import React from "react"
import "./Header.css"
import { Card } from "./card"
import FotoPerfil from "./img/foto-perfil.jpg"
import { MenuMobile } from "./MenuMobile"
import { useState, useRef } from "react"
import {AiOutlineClose} from "react-icons/ai"
import {GiHamburgerMenu} from "react-icons/gi"
import { Link } from "react-router-dom"


export const Header = () => {

  const [showMenu, setShowMenu] = useState(false)
  const showOrHide = () => setShowMenu(true)
  const hideMenu = () => setShowMenu(false)

  
 

 const HideTopo = () => {
  let nav = document.querySelector(".nav")
  nav.style.display="none"
 }
 
  return(
   <header className="header" >
       <nav className="nav">

       
          <div className="logo"><Link to="/">&lt; SF /&gt;</Link></div>
       
             <button className="botao-menu">
              <GiHamburgerMenu onClick={showOrHide} />
             </button>
     
       </nav>
             { showMenu &&
                <ul className="menu-mobile" onClick={hideMenu}>
                  <button className="botao-menu">
                    <AiOutlineClose onClick={hideMenu}  />
                  </button>

                  <Card img={FotoPerfil} title="Desenvolvedor Front-End JR" cidade="Rio de Janeiro, RJ" nome="Sandro Fernandes"/>

             <MenuMobile  />
             
</ul> }
   

   </header>
  )

}