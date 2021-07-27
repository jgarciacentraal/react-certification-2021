import React from 'react';

import { SearchContainer, InputText } from './Styles';

export default function Search() {
  return (
    <SearchContainer>
      <InputText data-testid="search-input" placeholder="Buscar contenido" />
    </SearchContainer>
  );
}
