import styled from 'styled-components';

export const SearchContainer = styled.div`
  border-radius: 5px;
  display: flex;
  justify-content: center;
  flex: 2 1 100%;
`;

export const InputText = styled.input`
  width: 40%;
  height: 100%;
  border-radius: 5px;
  margin: 10px;
  padding: 3px;
  & ::placeholder {
    color: #dedede;
  }
`;
