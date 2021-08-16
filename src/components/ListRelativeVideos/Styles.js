import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListImg = styled.img`
  justify-content: center;
  width: 100px;
  height: 60px;
`;

export const ListDetail = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2 1 100%;
  h5 {
    font-size: 14px;
    margin: 2px 5px 1px 5px;
    padding: 0px;
    font-family: Arial, Helvetica, sans-serif;
  }
`;
