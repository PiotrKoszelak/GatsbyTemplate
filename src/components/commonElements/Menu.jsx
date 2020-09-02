import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeader = styled.header`
    height: 50px;
    background-color: ${({ theme }) => `${theme.colors.green}`};
    display: flex;
    align-items: center;
`;

const Menu = ({ children }) => (
  <StyledHeader>
    {children}
  </StyledHeader>
);

Menu.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Menu;
