import React from 'react';
import {
  HeaderWrapper, StyledLink, Title,
} from './styles';

const Header = () => (
  <HeaderWrapper>
    <StyledLink to="/">
      <Title>Pokémunz</Title>
    </StyledLink>
  </HeaderWrapper>
);

export default Header;
