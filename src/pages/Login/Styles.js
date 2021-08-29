import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const LoginPromptTextField = styled(TextField)`
  margin-bottom: 1em;
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorBox = styled.div`
  padding: 4px;
  background-color: #f44336;
  color: white;
  h3 {
    font-size: 20px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans',
      Arial, sans-serif;
  }
`;
