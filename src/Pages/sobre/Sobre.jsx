import { Skills } from "./Skills"
import "./sobre.css"
import { useState } from "react"
import { FaLastfmSquare } from "react-icons/fa"

export const Sobre = () => {

  const [ react , setReact] = useState(false)
  const [ javascript , setJavascript] = useState(false)
  const [ git , setGit] = useState(false)
  const [ github , setGithub] = useState(false)
  const [ css, setCss] = useState(false)
  const [ html , setHtml] = useState(false)
  const [saibaMais , setSaibaMais] = useState(true)

  const showSaibaMais = () => {
    setSaibaMais(false)
  }

  const showReact = () => {
    react === false ? setReact(true) : setReact(false)
  }


  const showJavascript = () => {
    javascript === false ? setJavascript(true) : setJavascript(false)
  }

  const showGit = () => {
    git === false ? setGit(true) : setGit(false)
  }

  const showGithub = () => {
    github === false ? setGithub(true) : setGithub(false)
  }

  const showCss = () => {
    css === false ? setCss(true) : setCss(false)
  }

  const showHtml = () => {
    html === false ? setHtml(true) : setHtml(false)
  }

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
      
      <Skills react={showReact}  html={showHtml}  css={showCss} git={showGit} github={showGithub} javascript={showJavascript} saibaMais={showSaibaMais}/>

      <ul className="formation">
        <h2>Formação</h2>
     
        <ItemEstudo title="Analise e Desenvolvimento de Sistemas" sub="Universidade Estácio de Sá - 2° Período" />

      {saibaMais && <div className="saibamais-habilidades">Clique em uma habilidade e saiba mais</div> }
       

       {react && <ItemEstudo title="React JS e React Native" sub="Estácio, Rocketseat, Origamid e Onebitcode" />}

       {javascript &&  <ItemEstudo title="Javascript" sub="Estácio, Rocketseat, Origamid e Curso em vídeo" /> }

       {github &&  <ItemEstudo title="Github" sub="Rocketseat" /> }

       {git &&  <ItemEstudo title="Git" sub="Rocketseat" /> }

       {css &&  <ItemEstudo title="CSS3" sub="Estácio, Rocketseat, Origamid e Curso em vídeo" /> }
        
       {html &&  <ItemEstudo title="HTML" sub="Estácio, Rocketseat, Origamid e Curso em vídeo" /> }
       
        
      </ul>
    </section>
    
  )
}