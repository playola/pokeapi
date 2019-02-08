import React from 'react';
import { image } from '#static/img';
import {
  HeaderWrapper, StyledLink, Icon, Title,
} from './styles';

const Header = () => (
  <HeaderWrapper>
    <Icon src={image.logo} />
    <StyledLink to="/">
      <Title>Pokémunz</Title>
    </StyledLink>
  </HeaderWrapper>
);

export default Header;
