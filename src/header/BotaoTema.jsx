import { useState } from "react";
import "./botaotema.css";


//☀︎ ☽
export const BotaoTema = (props) => {

  const [theme , setTheme] = useState(false)



  const mudarTema = () => {
    
    theme === false ? setTheme(true) : setTheme(false)
  }
  
  return (
    
    
      <div className="container">
        
        <span style={{ color: theme ? "grey" : "#c96dfd" }}>☽</span>
        <div className="switch-checkbox">
          <label className="switch">
            <input   type="checkbox" onChange={() => {setTheme(!theme); props.mudar()  }} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: theme ? "yellow" : "grey" }} >☀︎</span>
      </div>
      
      
  )
}