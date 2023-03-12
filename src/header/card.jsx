import { Sociais } from "./Sociais";

export const Card = ({img, nome, title, cidade}) => {

  return(
    <div className="card-container">
    
        <div className="card-perfil">
            <img src={img}/> 
            <p>{nome}</p>
            <p>{title}</p>
            <p>{cidade}</p>
            <Sociais />
        </div>
    
   </div>
  )
}