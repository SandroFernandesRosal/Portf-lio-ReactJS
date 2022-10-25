import { useState } from "react"
import {FaHtml5, FaCss3, FaReact, FaGithub, FaGitSquare} from "react-icons/fa"
import {IoLogoJavascript} from "react-icons/io"


export const Skills = (props) => {

  
  

  return(
    <div className="container-skills"> 
    <h2>Habilidades</h2>

    <div className="skills">

    <div className="item-skills" onClick={ () => {props.saibaMais() ; props.html()}}  >
     <FaHtml5 /> 
    </div> 

    <div className="item-skills" onClick={() => {props.saibaMais() ; props.css()}}> 
     <FaCss3 /> 
    </div> 

    <div className="item-skills" onClick={() => {props.saibaMais() ; props.javascript()}}> 
     <IoLogoJavascript /> 
    </div> 

    <div className="item-skills" onClick={() => {props.saibaMais() ; props.react()}}>
     <FaReact />
    </div> 

    <div className="item-skills" onClick={() => {props.saibaMais() ; props.github()}}> 
     <FaGithub />
    </div> 

    <div className="item-skills" onClick={() => {props.saibaMais() ; props.git()}}> 
     <FaGitSquare />
    </div>

    </div>
</div>
  )
}