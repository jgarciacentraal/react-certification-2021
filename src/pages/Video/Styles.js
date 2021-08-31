import styled from 'styled-components';

export const VideoRow = styled.div`
  display: flex;
  width: 100%;
  //background-color: yellow;
  height: 100%;
  flex-direction: row;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const VideoColumn = styled.div`
  width: 70%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  @media (max-width: 1100px) {
    width: 100%;
  }
`;
