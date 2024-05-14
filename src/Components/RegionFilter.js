import React,{memo} from 'react';
import styled from 'styled-components';

const Select = styled.select`
  background-color: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.textColor};
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const RegionFilter = memo(({ handleRegionFilter }) => {
  const handleChange = event => {
    handleRegionFilter(event.target.value);
  };

  return (
    <Select onChange={handleChange}>
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </Select>
  );
});

export default RegionFilter;