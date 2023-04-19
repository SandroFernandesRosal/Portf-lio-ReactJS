import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items:center;
  padding-top: 100px;
  animation-name: sobre;
  animation-duration: 2s;
  color: ${({ theme }) => theme.colors.primaryTextColor};

  @keyframes sobre {
  from {
    width: 0vw;
    
  }
  to {
     width: 100vw;
     
    }
}

.formation {
  list-style: none;
  width:90%;
  display: flex;
  align-content: center;
  flex-direction: column;
  
}

.formation h2 {
  font-size: 40px;
  margin: 10px 0px 20px 0px;
  border-bottom: 2px solid green;
  align-self: center;
  
}

.formation li {
  display: flex;
  flex-direction: column;
 justify-content: flex-start;
 border-left: 1px groove gray;
 padding-left: 12px;
 
 height: 75px;
}



.formation li h3, .formation li h4 {
  position: relative;
  top: -75px;
 
  
}

.formation li h4 {
  color: green;
}


.formation li::before {
  content: ".";
  position: relative;
  left: -20px;
  font-size: 60px;
  color: green;
  top: -50px;
  
}

.saibamais-habilidades {
  font-size: 18px;
  margin-bottom: 100px;
  
}

@media (min-width: 800px) {
 
  padding-top: 0;
  flex-direction: row;
  align-items: center;
    
  .formation {
    flex:1;
    height: 400px;
    
  }

  .formation li {  
   height: 55px;
  }
}
`

export const ContainerSkills = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;

  .skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}


 h2 {
 font-size: 40px;
  margin: 10px 0;
  border-bottom: 2px solid green;
  
}

.item-skills {
  width: 100px;
  height: 100px;
  background-color: black;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.7s;
  background-color: ${({ theme }) => theme.colors.bgSkills};
  
}

.item-skills:hover {
  background-color: green;
}

.skills svg {
 font-size: 60px;
 color: white;
}

@media (min-width: 800px) {
   
    flex:1;
    height: 400px;
  

 }

`







