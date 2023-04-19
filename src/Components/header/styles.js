 import styled from "styled-components";

 export const Container = styled.header`
  display: flex;
  justify-content:space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryBg};
  color: ${({ theme }) => theme.colors.primaryTextColor};
  height: 80px;
  width: 100vw;
  border-bottom: 1px solid green;
  border-right: 1px solid green;
  position: fixed;
  z-index: 555;
  animation-name: header;
  animation-duration: 0.7s;


  @keyframes header {
  from {
    width: 0vw;
    
  }
  to {
     width: 100vw;
     
    }
}
 

.logo  {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid green;
  padding: 2px;
}

.logo:hover {
  background-color: green;
  transition: 0.7s;
}


.switch svg  {
  padding: 3px;
}

.menu {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  background-color: transparent;
  border: 1px solid green;
  cursor: pointer;
}

.menu svg {
  font-size: 30px;
  color: white;
  
}

.menu:hover {
  background-color: green;
  transition: 0.4s;
}
.menu svg:hover {
  transition: 0.4s;
  color: white;
}






`
export const Menu = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: fixed;
z-index: 222;
width: 100vw;
height: 100vh;
backdrop-filter: blur(8px);
background-color: rgba(100, 100, 100, 0.1);


 ul {

  display: flex;
  flex-direction: column;
  justify-content: center;
  
  height: 100%;
  text-align: center;
  list-style: none;
  
}
li {
  margin: 5px;
  font-size: 40px;
  font-weight: bold;
  color: white;
  text-shadow: 1px 1px 1px green;
  width: 100%;
  padding: 0 20px;
  
}
li:hover {
  transition:  0.5s;
  transform: scale(1.17);
  text-shadow: 1px 1px 1px white;
}
a {
  color: white;
  text-decoration: none;
}
li:hover {
  color: green;
}
`


export const CardContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 40px;


.card-perfil {
  width: 65%;
  max-width: 390px;
  height: 310px;
  
  color: ${({ theme }) => theme.colors.primaryTextColor};
  border-radius: 10px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 1.2rem;
  border: 1px solid green;
  
}

.card-perfil p {
  text-align: center;
}

.card-perfil img {
  width: 60%;
  border-radius: 50%;
  border: 2px solid green;
}

 

@media (min-width: 700px) {
  display: none;
}

`




