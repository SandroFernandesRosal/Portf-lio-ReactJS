import { Container } from "./styles";
import { Sociais } from "../../Components/header/Sociais";
import { Link } from "react-router-dom";
import Download from "./SandroFernandes.pdf";
import FotoPerfil from "../../Components/header/img/foto-perfil.png";

export const Home = () => {

  return(
    
    <Container>
      
           <div className="home"> 
               <h1>Olá, eu sou o </h1>
               <span>Sandro Fernandes</span>
               <h2>Desenvolvedor Front-End JR</h2>

               <Sociais />
               <div className="buttons"> 
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
           </div>

           <div className="foto-do-perfil">
            <img src={FotoPerfil}/>
           </div>

           
       
      </Container>

  )
}