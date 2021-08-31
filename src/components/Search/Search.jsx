import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { SearchContainer, InputText } from './Styles';

import { fetchVideos, onChangeSearch } from '../../store/globalActions';
import { useGlobalProvider } from '../../store/global.provider';

export default function Search() {
  const history = useHistory();
  const {
    state: { searchValue },
    dispatch,
  } = useGlobalProvider();

  const onHandleSearch = (event) => {
    const { value } = event.target;
    if (event.key === 'Enter') {
      onChangeSearch(dispatch, value);
      history.push('/');
    }
  };

  useEffect(() => {
    fetchVideos(dispatch, searchValue, false);
  }, [dispatch, searchValue]);

  return (
    <SearchContainer data-testid="search-container" >
      <InputText
        data-testid="search-input"
        placeholder="Buscar"
        onKeyDown={onHandleSearch}
      />
    </SearchContainer>
  );
}
