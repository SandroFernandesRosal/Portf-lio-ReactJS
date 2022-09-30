import {FaHtml5, FaCss3, FaReact, FaGithub, FaGitSquare} from "react-icons/fa"
import {IoLogoJavascript} from "react-icons/io"


export const Skills = () => {

  return(
    <div className="container-skills"> 
    <h2>Habilidades</h2>

    <div className="skills">
    <div className="item-skills">
     <FaHtml5 /> 
    </div> 
    <div className="item-skills"> 
     <FaCss3 /> 
    </div> 
    <div className="item-skills"> 
     <IoLogoJavascript /> 
    </div> 
    <div className="item-skills">
     <FaReact />
    </div> 
    <div className="item-skills"> 
     <FaGithub />
    </div> 
    <div className="item-skills"> 
     <FaGitSquare />
    </div>
    </div>
</div>
  )
}