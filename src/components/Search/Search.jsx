import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { SearchContainer, InputText } from './Styles';

import { fetchVideos, onChangeSearch } from '../../store/globalActions';
import { useGlobalProvider } from '../../store/global.provider';

export default function Search() {
  //const [search, setSearch] = useState('')
  const history = useHistory();
  const {
    state: { searchValue },
    dispatch,
  } = useGlobalProvider();
  

  const onHandleSearch = (event) => {
    console.log(event.target.value);
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
    <SearchContainer>
      <InputText
        data-testid="search-input"
        placeholder="Buscar"
        onKeyDown={onHandleSearch}
      />
    </SearchContainer>
  );
}
