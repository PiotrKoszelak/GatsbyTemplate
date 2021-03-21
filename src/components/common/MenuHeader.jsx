import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSpan = styled.span`
  color: ${({
    theme
  }) => `${theme.colors.white}`};
  font-size: 20px;
`;

const MenuHeader = ({
  text
}) => <StyledSpan>{text}</StyledSpan>;

MenuHeader.defaultProps = {
  text: 'gatsby-template'
};

MenuHeader.propTypes = {
  text: PropTypes.string
};

export default MenuHeader;
