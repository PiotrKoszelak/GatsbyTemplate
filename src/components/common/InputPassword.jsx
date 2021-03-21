import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  graphql, useStaticQuery
} from 'gatsby';
import Img from 'gatsby-image';
import DefaultImg from '../../img/icons/default_dark.png';

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

const StyledImg = styled(Img)`
  width: 24px;
  height: 24px;
`;

const StyledButton = styled.button`
position: absolute;
cursor: pointer;
border: none;
background: none;
height: fit-content;
margin-left: ${({
    width
  }) => `${width - 40}px`};
`;

const StyledDefaultImg = styled.img`
  width: 20px;
  height: 20px;
`;

const StyledDivContainer = styled.div`
 display: flex;
 align-items: center;
`;

const InputPassword = ({
  value, onChange, width, showPassword, handleClickShowPassword
}) => {
  const Icon = useStaticQuery(
    graphql`
      {
        icons: allFile(filter: { absolutePath: { regex: "/icons/" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                id
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  );

  const showIcon = () => {
    const foundIcon = Icon.icons.edges.find(({
      node
    }) => (showPassword
      ? node.relativePath.includes('hidePassword')
      : node.relativePath.includes('showPassword')));
    return (
      <StyledButton
        type='button'
        onClick={() => handleClickShowPassword()}
        width={width}
      >
        {foundIcon
          ? (
            <StyledImg
              fluid={foundIcon.node.childImageSharp.fluid}
              alt={showPassword ? 'show password' : 'hide-password'}
              key={foundIcon.node.childImageSharp.id}
            />
          )
          : <StyledDefaultImg src={DefaultImg} alt='no icon' />}
      </StyledButton>
    );
  };

  return (
    <StyledDivContainer>
      <StyledInput
        onChange={onChange}
        value={value}
        width={width}
        type={showPassword ? 'text' : 'password'}
      />
      {showIcon()}
    </StyledDivContainer>
  );
};

InputPassword.defaultProps = {
  value: '',
  onChange: () => {},
  width: '150px',
  showPassword: false,
  handleClickShowPassword: () => {}
};

InputPassword.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  width: PropTypes.string,
  showPassword: PropTypes.bool,
  handleClickShowPassword: PropTypes.func
};

export default InputPassword;
