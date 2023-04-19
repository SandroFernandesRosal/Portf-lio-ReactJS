import styled from "styled-components";
import BgDark from "./img/img-bgperfil.jpg";
import BgLight from "./img/img-perfil-light.jpg";


export const Container = styled.section`

background-image: url(${({ theme }) => theme.title === 'dark' ? BgDark : BgLight});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;


  .foto-do-perfil {
  display: none;
  
}


.home h1, .home h2 {
  font-size: 22px;
  
}



.home span {
  color: green;
  font-size: 45px;
  font-family: 'Ms Madi', cursive;
  font-weight: 900;
  white-space: nowrap;
  overflow: hidden;
  animation: typewriter 5s steps(20) infinite alternate
  , blink 800ms steps(20) infinite normal;
  border-right: 3px solid black;
 
}

@keyframes typewriter {
  from {
    width: 0%;
  }
  to {
    width: 105%;
  }
}
@keyframes blink {
  from {
    border-color: black;
  }
  to {
    border-color: transparent;
  }
}



.home {
  
  display: flex;
  flex-direction: column;
  
  gap:10px;
  align-items: flex-start;
  
}


.home  button {
  padding: 10px;
  border-radius: 10px;
  border: 1px solid green;
  font-size: 17px;
  background-color: black;
  color: white;
  width: 100%;
  outline: none;
  cursor: pointer;
  
  
}

.home button:hover {
  background-color: green;
  
}


a {
  text-decoration: none;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
  
  
}


.saiba-mais {
  animation: saibaMais 1s infinite;
}

.home a {
  display: flex;
  
}



@keyframes saibaMais {
  from {
    background-color: black;
    
  }
  to {
     background-color: green;
     
    }
}

@media (min-width: 700px) {
 
  
    align-items: center;
    justify-content:space-around;
    
  
  

.foto-do-perfil {
  
  display: flex;
  align-items: center;
  height: 300px;
  width: 300px;
  justify-content: center;
  align-items: flex-end;
  border-radius: 100% 40% 55% 35%;
  border: 1px double green;
  background-color: #0e0e0e;
  cursor: pointer;
  overflow: hidden;
  
  
}

.foto-do-perfil:hover {
  
  background-color: transparent;
  
}

.foto-do-perfil img {
  width: 250px;
  height: 250px;
  
}

.home {
  align-items: flex-start;
}

}

@media (min-width: 800px) {

  
    align-items: center;
    justify-content:space-around;
    
  
 }


`




