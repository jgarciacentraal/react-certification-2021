import styled from 'styled-components';

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 20px;
  padding: 2em;
  margin: 2em;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const VideoImagen = styled.img`
  justify-content: center;
  width: 100%;
  height: auto;
`;

export const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2 1 100%;
  h5 {
    font-size: 30px;
    margin: 2px 5px 1px 5px;
    padding: 0px;
    font-family: Arial, Helvetica, sans-serif;
    @media (max-width: 1100px) {
      font-size: 2.2vw;
    }
    @media (max-width: 450px) {
      font-size: 12px;
    }
  }
  p {
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    color: #a5a18f;
    margin: 0px 0px 0px 5px;
    padding: 0px;
    @media (max-width: 1100px) {
      font-size: 1.5vw;
    }
    @media (max-width: 450px) {
      font-size: 10px;
    }
  }
`;
