import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  background-color: ${({ theme }) => theme.primary};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Title = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.white};
`;

export const Icon = styled.img`
  width: 100px;
  margin-right: 20px;
`;
