import styled from 'styled-components';

export const ToggleWrapper = styled.div`
  width: 60px;
  height: 17px;
  border: 2px solid #e8eef3;
  border-radius: 15px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 5px;
  transition: background-color 1s, border-width 0.1s;
`;

export const ToggleCircle = styled.div`
  width: 17px;
  height: 17px;
  background-color: #e8eef3;
  border-radius: 50%;
  transition: 1s;
  position: relative;
  left: 0;
`;
