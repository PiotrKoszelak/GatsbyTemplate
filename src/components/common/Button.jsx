import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  height: 20px;
  background-color: ${({
    theme
  }) => `${theme.colors.green}`};
  color: ${({
    theme
  }) => `${theme.colors.white}`};
  text-align: center;
  width: ${({
    width
  }) => `${width}px`};
  cursor: pointer;
  border-radius: 5px;
  border: none;
`;

const Button = ({
  text, onClick, width
}) => (
  <StyledButton width={width} onClick={onClick}>
    {text}
  </StyledButton>
);

Button.defaultProps = {
  text: 'no text',
  onClick: () => {},
  width: '75px'
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  width: PropTypes.string
};

export default Button;
