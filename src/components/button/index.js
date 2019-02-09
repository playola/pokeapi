import styled, { css } from 'styled-components';

const Button = styled.button`${({ theme }) => css`
  background-color: ${theme.primary};
  color: ${theme.white};
  cursor: pointer;
  margin-right: 15px;
  border-radius: 4px;
  outline: none;
`}`;

export default Button;
