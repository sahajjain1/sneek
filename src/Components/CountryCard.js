import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImage, CardContent, CardTitle, CardText } from '../styles/styled';
import { memo } from 'react';

const CountryCard = memo(({ country }) => {
  return (
    <Link to={`/country/${country.name}`}>
      <Card>
        <CardImage src={country.flags.png} alt={`${country.name} flag`} />
        <CardContent>
          <CardTitle>{country.name}</CardTitle>
          <CardText>Population: {country.population.toLocaleString()}</CardText>
          <CardText>Region: {country.region}</CardText>
          <CardText>Capital: {country.capital}</CardText>
        </CardContent>
      </Card>
    </Link>
  );
});

export default CountryCard;