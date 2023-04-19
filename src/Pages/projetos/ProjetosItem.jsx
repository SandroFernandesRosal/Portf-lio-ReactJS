import { useState } from "react"
import {FaExternalLinkAlt, FaRegClosedCaptioning} from "react-icons/fa"
import {BsInfoSquare} from "react-icons/bs"
import {FaGithub}  from "react-icons/fa"
import {AiOutlineClose} from "react-icons/ai"
import { Itens } from "./styles";

export const ProjetosItem = ({ projeto }) => {
  const [display, setDisplay] = useState(false);
  
  return (
    <Itens>
      <img src={projeto.img} onClick={() => setDisplay(true)} />

      { display && 
        <div className="saiba-mais-card"  > 
          <button onClick={() => setDisplay(false)}><AiOutlineClose /></button>

          <div>
              <h1>{projeto.saiba}</h1> 
              <p>{projeto.tecnologia}</p>
          </div>

        </div>
      }

      <div className="buttons">

        <button onClick={() => display === false ? setDisplay(true): setDisplay(false) } ><BsInfoSquare/></button>

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
    </Itens>
  );
}