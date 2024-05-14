import React, { useState, useEffect, useCallback } from 'react';
import { Container, CardGrid } from '../styles/styled';
import { fetchData } from '../utils/fetchData';
import Header from '../Components/Header';
import SearchInput from '../Components/SearchInput';
import RegionFilter from '../Components/RegionFilter';
import CountryCard from '../Components/CountryCard';
import styled from 'styled-components';

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;


const Homepage = ({ toggleTheme }) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  useEffect(() => {
    fetchData('https://restcountries.com/v2/all')
      .then(data => {
        setCountries(data);
        setFilteredCountries(data);
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    const filtered = countries.filter(
      country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedRegion === '' || country.region === selectedRegion)
    );
    setFilteredCountries(filtered);
  }, [countries, searchTerm, selectedRegion]);

  const handleSearch = useCallback(value => {
    setSearchTerm(value);
  }, []);
  
  const handleRegionFilter = useCallback(region => {
    setSelectedRegion(region);
  }, []);

  return (
    <div>
      <Header toggleTheme={toggleTheme} />
      <Container>
        <FlexBox>
        <SearchInput handleSearch={handleSearch} />
        <RegionFilter handleRegionFilter={handleRegionFilter} />
        </FlexBox>
        <CardGrid>
          {filteredCountries.map(country => (
            <CountryCard key={country.alpha3Code} country={country} />
          ))}
        </CardGrid>
      </Container>
    </div>
  );
};

export default Homepage;