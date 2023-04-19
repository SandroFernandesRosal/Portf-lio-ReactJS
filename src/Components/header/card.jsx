import { Sociais } from "./Sociais";
import { CardContainer } from "./styles";

export const Card = ({img, name, title, city}) => {

  return(
    <CardContainer>
    
        <div className="card-perfil">
            <img src={img}/> 
            <p>{name}</p>
            <p>{title}</p>
            <p>{city}</p>
            <Sociais />
        </div>
    
   </CardContainer>
  )
}