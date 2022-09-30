import "./projetos.css"
import {FaExternalLinkAlt} from "react-icons/fa"
import {BsInfoSquare} from "react-icons/bs"
import {FaGithub}  from "react-icons/fa"
import {AiOutlineClose} from "react-icons/ai"
import { DataProjetos } from "./DataProjeto"
import { useState } from "react"



export const Projetos = () => {

  const displayNone = {
    display: "none"
  }
  const displayFlex = {
  display: "flex"
  }  

 

  const [showdisplay, setShowDisplay] = useState(false)
  const show = () => setShowDisplay(true)
  const hide = () => setShowDisplay(false)




  return(
    <section className="projetos">
    <h1>Meus Projetos</h1>
    
    

    

    <ul className="projetos-container">
     {DataProjetos.map((projeto, index) => 
     {
     
      return(
    <li key={index} >
        <img src={projeto.img} onClick={() => show(projeto.id)} />

        { showdisplay && 
        <div className="saiba-mais-card"  > 
        <button onClick={hide}><AiOutlineClose /></button>
        <div>
        <h1>{projeto.saiba}</h1> 
        
        <p>{projeto.tecnologia}</p>
        </div>
        </div>
        }
        <div className="buttons">

            <button onClick={() => show(projeto.id)}><BsInfoSquare /></button>

            <div>
              <a href={projeto.acessar} target="_blank">
               <button><FaExternalLinkAlt /></button>
              </a>
            </div>

            <div>
              <a href={projeto.repositorio} target="_blank">
               <button><FaGithub /></button>
              </a>
            </div>
        </div>
      </li>
)

     })}
    </ul>

    
    
    
    </section>
  )
}