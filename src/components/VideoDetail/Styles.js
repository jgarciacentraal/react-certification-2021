import styled from 'styled-components';

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2rem;
  padding: 2em;
`;
export const VideoInfoContainer = styled.div`
  padding: 0.8rem;
`;
export const VideoTitle = styled.h2`
  margin-bottom: 1.4rem;
  font-size: 18px;
`;
export const VideoText = styled.p`
  font-family: 'Roboto';
  text-align: justify;
  font-size: 14px;
`;

export const VideoiFrame = styled.iframe`
  width: 100%;
  height: 600px;
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
