import styled from 'styled-components';
import { breakpoint } from '#style/breakpoint';

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${breakpoint.tablet}px;
  padding: 20px;
  margin: 20px;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 4px;
`;
