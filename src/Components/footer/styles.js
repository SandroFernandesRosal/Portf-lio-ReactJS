import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.primaryBg};
  height: 60px;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 900;
  color: white;
  
`
