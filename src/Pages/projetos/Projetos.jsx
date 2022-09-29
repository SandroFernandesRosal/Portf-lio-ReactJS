import "./projetos.css"

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
        <button onClick={hide}>X</button>
        <div>
        <h1>{projeto.saiba}</h1> 
        
        <p>{projeto.tecnologia}</p>
        </div>
        </div>
        }
        <div className="buttons">

            <button onClick={() => show(projeto.id)}>+ Info</button>

            <div>
              <a href={projeto.acessar} target="_blank">
               <button>Ir</button>
              </a>
            </div>

            <div>
              <a href={projeto.repositorio} target="_blank">
               <button>Repo</button>
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