import styled from 'styled-components';

export const HeaderContainer = styled.nav`
  width: 100%;
  padding: 5px;
  font-size: 18px;
  position: sticky;
  top: 0;
  z-index: 999;
  height: 60px;
  background-color: #282d30;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
`;

export const ToggleMenu = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  margin: 20px;
  padding: 3px;
  border-radius: 5px;
  border-style: solid;
  border-color: white;
`;
