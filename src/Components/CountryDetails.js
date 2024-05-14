import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 50%;
  margin-right: 2rem;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const InfoContainer = styled.div`
  flex: 0 0 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const InfoRow = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;

const InfoLabel = styled.span`
  font-weight: bold;
  margin-right: 0.5rem;
`;

const InfoValue = styled.span``;

const CountryDetails = ({ country }) => {
  return (
    <DetailsContainer>
      <ImageContainer>
        <Image src={country.flags.png} alt={`${country.name} flag`} />
      </ImageContainer>
      <InfoContainer>
        <Title>{country.name}</Title>
        <InfoRow>
          <InfoLabel>Native Name:</InfoLabel>
          <InfoValue>{country.nativeName}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>Population:</InfoLabel>
          <InfoValue>{country.population.toLocaleString()}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>Region:</InfoLabel>
          <InfoValue>{country.region}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>Sub Region:</InfoLabel>
          <InfoValue>{country.subregion}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>Capital:</InfoLabel>
          <InfoValue>{country.capital}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>Top Level Domain:</InfoLabel>
          <InfoValue>{country.topLevelDomain.map(tld => (
            <span key={tld}>{tld}</span>
          ))}</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>Currencies:</InfoLabel>
        <InfoValue>
          {country.currencies.map(currency => (
            <span key={currency.code}>{currency.name} ({currency.symbol}) </span>
          ))}
        </InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>Languages:</InfoLabel>
        <InfoValue>
          {country.languages.map(language => (
            <span key={language.iso639_1}>{language.name}</span>
          ))}
        </InfoValue>
      </InfoRow>
    </InfoContainer>
</DetailsContainer >
);
};
export default CountryDetails;