import "./projetos.css"

import { DataProjetos } from "./DataProjeto"

import { ProjetosItem } from "./ProjetosItem"



export const Projetos = () => {

  
  

  return(
    <section className="projetos">
    <h1>Meus Projetos</h1>
    
    <ul className="projetos-container">

    {DataProjetos.map((projeto, index) => <ProjetosItem key={index} projeto={projeto} />)}
    
    </ul>

    </section>
  )
}