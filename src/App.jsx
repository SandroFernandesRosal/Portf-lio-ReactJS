import React from 'react';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Themes/GlobalStyles"
import { Rotas } from "./Routes/Rotas"
import { dark } from "./Themes/dark";
import { light } from "./Themes/light";
import  usePersistedState  from "./Hooks/usePersistedState"

function App() {
  
  const [ theme, setTheme ] = usePersistedState('theme', dark);
  
  const handleChangeTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);   
  }
 
  return (
  
    <ThemeProvider theme={theme} >

      <GlobalStyles />
      
      <Rotas handleChangeTheme={handleChangeTheme} theme={theme} />
   
    </ThemeProvider>
  
  )
}

export default App
