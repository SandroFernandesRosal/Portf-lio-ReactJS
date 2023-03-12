
import {FaHtml5, FaCss3, FaReact, FaGithub, FaGitSquare, FaNodeJs} from "react-icons/fa"
import {IoLogoJavascript} from "react-icons/io"


export const Skills = ({saibaMais, html, css, javascript,react, node, github, git}) => {

  
  return(
    <div className="container-skills"> 
    <h2>Habilidades</h2>

    <div className="skills">

    <div className="item-skills" onClick={ () => {saibaMais() ; html()}}  >
     <FaHtml5 /> 
    </div> 

    <div className="item-skills" onClick={() => {saibaMais() ; css()}}> 
     <FaCss3 /> 
    </div> 

    <div className="item-skills" onClick={() => {saibaMais() ; javascript()}}> 
     <IoLogoJavascript /> 
    </div> 

    <div className="item-skills" onClick={() => {saibaMais() ; react()}}>
     <FaReact />
    </div> 

    <div className="item-skills" onClick={() => {saibaMais() ; node()}}> 
     <FaNodeJs />
    </div> 

    <div className="item-skills" onClick={() => {saibaMais() ; github()}}> 
     <FaGithub />
    </div> 

    <div className="item-skills" onClick={() => {saibaMais() ; git()}}> 
     <FaGitSquare />
    </div>

    </div>
</div>
  )
}