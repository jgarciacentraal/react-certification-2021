import styled from 'styled-components';

export const VideoiFrame = styled.iframe`
  width: 100%;
  height: 600px;
`;

export const VideoDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
`;

export const Title = styled.h2`
  margin: 0px;
`;

export const Button = styled.button`
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 5px;
  width: 160px;
  height: 30px;
  background-color: transparent;
  margin-right: 5px;
  cursor: pointer;
  overflow: hidden;
  padding: 0px;
  position: relative;
  outline: none;
`;

export const Paragraph = styled.p`
  padding: 10px;
`;
