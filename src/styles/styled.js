import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Nunito Sans', sans-serif;
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
  }

  button {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 3rem; 
  margin-top: 1.7rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 1rem;
`;

export const CardTitle = styled.h3`
margin-bottom: 0.5rem;
font-size: 1.2rem;

@media (max-width: 768px) {
  font-size: 1rem;
}
`;

export const CardText = styled.p`
margin-bottom: 0.5rem;
font-size: 0.9rem;

@media (max-width: 768px) {
  font-size: 0.8rem;
}
`;

export const LightTheme = {
  bgColor: '#fafafa',
  textColor: '#333',
  cardBg: '#fff',
};

export const DarkTheme = {
  bgColor: '#202c37',
  textColor: '#fff',
  cardBg: '#2b3945',
};