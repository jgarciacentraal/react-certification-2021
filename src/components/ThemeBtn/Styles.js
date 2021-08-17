import styled from 'styled-components';

export const Button = styled.button`
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0px;
  position: relative;
  width: 50px;
  height: 30px;
  outline: none;
  background: transparent;

  @media (max-width: 800px) {
    visibility: hidden;
    width: 0px;
  }
`;

export const Sun = styled.svg`
  height: 90%;
  width: auto;
  transition: all 0.7s linear;
`;

export const Moon = styled.svg`
  height: 75%;
  width: auto;
  transition: all 0.7s linear;
`;
