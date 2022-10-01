import { Skills } from "./Skills"
import "./sobre.css"

export const Sobre = () => {

  const ItemEstudo = (props) => {

    return(
      <li >
      <h3>{props.title}</h3>
      <h4>{props.sub}</h4>
      
      </li>
    )
  }

  return(
    
    <section className="sobre">
      
      <Skills />

      <ul className="formation">
        <h2>Formação</h2>
     
        <ItemEstudo title="Analise e Desenvolvimento de Sistemas" sub="Universidade Estácio de Sá - 2° Período" />
        <ItemEstudo title="React JS" sub="Rocketseat e Origamid" />
        <ItemEstudo title="HTML, CSS e Javascript" sub="Rocketseat, Origamid e Curso em vídeo" />
        
      </ul>
    </section>
    
  )
}