import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { fetchData } from '../utils/fetchData';
import CountryDetails from '../Components/CountryDetails';

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const BackButton = styled(Link)`
  display: inline-block;
  background-color: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.textColor};
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  margin-bottom: 2rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const BorderCountries = styled.div`
  margin-top: 2rem;
`;

const BorderCountryLink = styled(Link)`
  display: inline-block;
  background-color: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.textColor};
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  margin-right: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const CountryDetailsPage = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetchData(`https://restcountries.com/v2/name/${countryName}?fullText=true`)
      .then(data => setCountry(data[0]))
      .catch(error => console.error(error));
  }, [countryName]);

  return (
    <Container>
      <BackButton to="/">Back</BackButton>
      {country && (
        <div>
          <CountryDetails country={country} />
          <BorderCountries>
            <h3>Border Countries:</h3>
            {country.borders.map(border => (
              <BorderCountryLink key={border} to={`/country/${border}`}>
                {border}
              </BorderCountryLink>
            ))}
          </BorderCountries>
        </div>
      )}
    </Container>
  );
};

export default CountryDetailsPage;
