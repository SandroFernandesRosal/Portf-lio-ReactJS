
import { Sociais } from "./sociais"

export const Card = (props) => {

  return(
    <div className="card-container">
    
    <div className="card-perfil">
    <img src={props.img}/> 
    <p>{props.nome}</p>
    <p>{props.title}</p>
    <p>{props.cidade}</p>
    <Sociais />
    </div>
    
   </div>
  )
}