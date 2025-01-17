import styled from 'styled-components';

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  height: 330px;
  width: 330px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #ddd;
  margin: 10px;
  padding: 1em;
  cursor: pointer;

  img {
    width: 100%;
    height: 150px;
  }
  h5 {
    font-size: 18px;
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
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    color: #a5a18f;
    margin: 0px 0px 5px 5px;
    padding: 15px;
    @media (max-width: 1100px) {
      font-size: 1.5vw;
    }
    @media (max-width: 450px) {
      font-size: 10px;
    }
  }
`;

export const Button = styled.button`
  text-decoration: none;
  border: none;
  padding: 10px 10px;
  display: inline-block;
  cursor: pointer;
  width: auto;
  margin: 10px;
  background-color: #2b5876;
  color: white;
  border-radius: 8px;
`;
