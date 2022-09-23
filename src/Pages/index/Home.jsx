import "./home.css"
import { Sociais } from "../../header/sociais"
import {FaAngleDoubleDown} from "react-icons/fa"
import { Link } from "react-router-dom"

export const Home = () => {

  return(
    
    <section className="perfil-home">
      

           <div className="sobre"> 
               <h1>Olá, eu sou o <br/><span>Sandro Fernandes</span></h1>
               <h2>Desenvolvedor Front-End JR</h2>

               <button>Download CV</button>
               
               <Sociais className="sociais-home"/>

               <Link to="/sobre">
               <div className="saiba-mais">
                  <spam>Saiba mais</spam>
                  <FaAngleDoubleDown />
               </div>
               </Link>
           </div>

           
       
      </section>

  )
}