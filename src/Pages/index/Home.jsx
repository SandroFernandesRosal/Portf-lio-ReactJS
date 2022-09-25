import "./home.css"
import { Sociais } from "../../header/sociais"
import {FaAngleDoubleDown} from "react-icons/fa"
import { Link } from "react-router-dom"


export const Home = () => {

  return(
    
    <section className="perfil-home">
      

           <div className="home"> 
               <h1>Olá, eu sou o </h1>
               <span>Sandro Fernandes</span>
               <h2>Desenvolvedor Front-End JR</h2>
               
               <a download href="src\Pages\index\Sandro Fernandes - Dev Front-End  (1).pdf" target="blank"> 
                   <button> Download CV </button> 
               </a>   
               
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