import styled from 'styled-components';

export const ButtonLgn = styled.button`
  border: 2px solid #e8eef3;
  border-radius: 30px;
  cursor: pointer;
  font-size: 10px;
  justify-content: space-between;
  margin: 0px 10px;
  overflow: hidden;
  padding: 0px;
  position: relative;
  width: 80px;
  height: 50%;
  outline: none;
  background: #e8eef3;
  //color: ${({ theme }) => theme.text};

  @media (max-width: 800px) {
    width: 60px;
    font-size: 12px;
    margin: 0px;
  }
`;
