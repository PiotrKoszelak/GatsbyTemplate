import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
  width: ${({
    width
  }) => `${width}px`};
  border: 1px solid ${({
    theme
  }) => `${theme.colors.green}`};
  padding: 5px;
  margin: 10px 0;
  border-radius: 5px;
`;

const InputText = ({
  value, onChange, width
}) => (
  <StyledInput onChange={onChange} value={value} width={width} />
);

InputText.defaultProps = {
  value: '',
  onChange: () => {},
  width: '150px'
};

InputText.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  width: PropTypes.string
};

export default InputText;
