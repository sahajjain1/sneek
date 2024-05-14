import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';
import debounce from 'lodash/debounce';


const SearchInputContainer = styled.div`
  width: 25vw;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 5px;
  padding: 0.7rem 1rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.textColor};
  flex: 1;
  margin-left: 0.5rem;

  ::placeholder {
    color: ${({ theme }) => theme.textColor};
    opacity: 0.5;
  }
`;

const SearchInput = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedHandleSearch = useCallback(
    debounce(value => handleSearch(value), 400),[]);

  const handleChange = event => {
    const { value } = event.target;
    setSearchTerm(value);
    debouncedHandleSearch(value);
  };

  return (
    <SearchInputContainer>
      <HiSearch color={({ theme }) => theme.textColor} />
      <Input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={handleChange}
      />
    </SearchInputContainer>
  );
};

export default SearchInput;