import styled from 'styled-components';
import { breakpoint } from '#style/breakpoint';

export const PokemonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const FormWrapper = styled.div`
  @media(min-width: ${breakpoint.tablet}px) {
    display: flex;
    justify-content: space-around;
    width: 70%;
  }
`;

export const PokemonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${breakpoint.tablet}px;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 4px;
  margin-bottom: 5px;
`;

export const PokemonText = styled.span`
  padding-left: 20px;
`;
