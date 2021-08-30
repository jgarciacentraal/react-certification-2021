import styled from 'styled-components';

export const ListContainer = styled.div`
  width: 30%;
  height: 100%;
  overflow: scroll;
`;

export const ListVideoItem = styled.button`
  width: 100%;
  height: 100px;
  position: relative;
  display: flex;
  align-items: center;
  border: none;
  color: inherit;
  background: inherit;
  text-align: inherit;
  overflow: hidden;

  & :hover {
    cursor: pointer;
  }
`;

export const ListImg = styled.img`
  width: 120px;
  height: 90px;
`;

export const ListDetail = styled.div`
  height: 100%;
  //flex-grow: 1;
  padding: 5px;
  box-sizing: border-box;
  h5 {
    font-size: 14px;
    margin: 2px 5px 1px 5px;
    padding: 0px;
    font-family: Arial, Helvetica, sans-serif;
  }
`;
