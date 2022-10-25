import "./home.css"
import { Sociais } from "../../header/Sociais"
import {FaAngleDoubleDown} from "react-icons/fa"
import { Link } from "react-router-dom"
import Download from "./SandroFernandes.pdf"

export const Home = () => {

  return(
    
    <section className="perfil-home">
      

           <div className="home"> 
               <h1>Olá, eu sou o </h1>
               <span>Sandro Fernandes</span>
               <h2>Desenvolvedor Front-End JR</h2>

               <Sociais />
               
               <a  href={Download}download> 
                   <button type="button">
                   Download CV
                   </button>
               </a>   
               

               <Link to="/sobre">
               <button className="saiba-mais">
                  Saiba mais
                  
               </button>
               </Link>
           </div>

           
       
      </section>

  )
}