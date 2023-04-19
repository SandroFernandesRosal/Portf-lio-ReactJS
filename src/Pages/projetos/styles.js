import styled from "styled-components";

export const Container = styled.section`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  animation-name: projetos;
  animation-duration: 2s;

  @keyframes projetos {
  from {
    width: 0vw;
    
  }
  to {
     width: 100vw;
     
    }
}

 h1 {
  border-bottom: 2px solid green;
  margin: 90px 0px 20px 0px;
}

.projetos-container {
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  
}

`
export const Itens = styled.li`
 width: 300px;
 height: 550px;
 border: 1px solid ${({ theme }) => theme.colors.borderProject};
 display: flex;
 flex-direction: column;
 align-items: center;
 background-color: black;
 border-radius: 10px;
 margin:  10px;
 position: relative;
 box-shadow: 0 4px 4px -2px ${({ theme }) => theme.colors.primaryColor} ;
 color: white;

img {
  width: 100%;
  height: 85%;
  border-radius: 10px 10px 0px 0px;
  border-bottom: 1px solid green;
  cursor: pointer;
  object-fit: cover;
  object-position: 0px 0px;
  
}

 .saiba-mais-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  width: 100%;
  height: 85%;
  border-bottom: 1px solid green;
  text-align: center;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 10px 10px 0px 0px;
}
.saiba-mais-card button {
 width: 50px;
 height: 50px;
 border-radius: 25px;
 
}

.saiba-mais-card div { 
  display: flex;
  flex-direction: column;
  align-items: center;
  
}

.saiba-mais-card h1 {
  border-bottom: 1px solid green;
  display: inline;
  font-size: 17px;
  
}

.saiba-mais-card p {
  width: 70%;
  
}


.buttons {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  
}

 button {
  background-color: transparent;
  outline: none;
  width: 50px;
  height: 50px;
  color: white;
  border: 1px solid green;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
}

 button:hover {
  background-color: green;
 
  transition: 0.7s;
  
}

.saiba-mais-card button svg {
  font-size: 30px;
  
}

.buttons svg {
  font-size: 25px;
  
}

`





