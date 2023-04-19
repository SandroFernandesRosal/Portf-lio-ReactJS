import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle `

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}

body, html {
  
  background-color: ${({ theme }) => theme.colors.secundaryBg};
  color: ${({ theme }) => theme.colors.primaryTextColor};
  font-family: 'Roboto', sans-serif;
  overflow-x: hidden;
}

body::-webkit-scrollbar {
  width: 10px;
  
}

body::-webkit-scrollbar-track {
  background-color: gray; 
  border-radius: 10px;
  
}

body::-webkit-scrollbar-thumb {
  
  background-color:  green;
  border-radius: 10px;
  border: 3px solid gray;
  
}

@media (min-width: 800px) {


.App {
  display: flex;
  flex-direction: column;
  
}



.perfil-home {
  width: 100%;
}
 
}


`