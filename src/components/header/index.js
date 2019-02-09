import React from 'react';
import PropTypes from 'prop-types';
import {
  HeaderWrapper, StyledLink, Title,
} from './styles';

/**
 * Shared header for pokemon list and pokemon detail with routing when clicked.
 * @param {boolean} disabled Enable or disable Link functionality.
 */
const Header = ({ disabled }) => (
  <HeaderWrapper>
    <StyledLink to="/" disabled={disabled}>
      <Title>Pokémunz</Title>
    </StyledLink>
  </HeaderWrapper>
);

Header.propTypes = {
  disabled: PropTypes.bool,
};

Header.defaultProps = {
  disabled: false,
};

export default Header;
