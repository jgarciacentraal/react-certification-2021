import React from 'react';

import { SearchContainer, InputText } from './Styles';

export default function Search({ handleSearch }) {
  
  const onHandleSearch = (event) => {
    handleSearch(event.target.value)
  }

  return (
    <SearchContainer>
      <InputText 
        data-testid="search-input" 
        placeholder="Buscar contenido" 
        onKeyDown={onHandleSearch}
      />
    </SearchContainer>
  );
}
