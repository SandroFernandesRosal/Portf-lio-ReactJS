import { Container } from "./styles"

import { DataProjetos } from "./DataProjeto"

import { ProjetosItem } from "./ProjetosItem"



export const Projetos = () => {

  
  

  return(
    <Container>

    <h1>Meus Projetos</h1>
    
    <ul className="projetos-container">
    
    {DataProjetos.map((projeto, index) => <ProjetosItem key={index} projeto={projeto} />)}
    
    </ul>

    </Container>
  )
}