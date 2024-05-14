import React from 'react';
import styled from 'styled-components';
import { HiMoon, HiSun } from 'react-icons/hi';
import { LightTheme } from '../styles/styled';


const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.cardBg};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;

const ThemeToggle = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1rem;
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const ThemeIcon = styled.span`
  margin-right: 0.5rem;
`;

const Header = ({ toggleTheme, theme }) => {
  return (
    <HeaderContainer>
      <Title>Where in the world?</Title>
      <ThemeToggle onClick={toggleTheme}>
        <ThemeIcon>{theme === LightTheme ? <HiMoon /> : <HiSun />}</ThemeIcon>
        {theme === LightTheme ? 'Dark Mode' : 'Light Mode'}
      </ThemeToggle>
    </HeaderContainer>
  );
};

export default Header;