import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  padding: 0;
  text-rendering: optimizeLegibility;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  background-size: 400% 400%;
  background-position: var(--bg-position);
  transition: all 0.50s linear;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
