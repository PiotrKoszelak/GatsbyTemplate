import React from 'react';
import styled from 'styled-components';
import {
  graphql, useStaticQuery
} from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import {
  connect
} from 'react-redux';
import changeSection from '../../state/actions/other';
import DefaultImg from '../../img/icons/default.png';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  flex-direction: column;
  jusitfy-content: center;
  cursor: pointer;
  margin: 0 10px;
  background: none;
  border: none;
  &:focus {
    outline: 1px solid ${({
    theme
  }) => `${theme.colors.darkGreen}`};; 
  }
`;

const StyledImg = styled(Img)`
  width: 16px;
  height: 16px;
`;

const StyledDefaultImg = styled.img`
  width: 16px;
  height: 16px;
`;

const StyledSpan = styled.span`
  font-size: 12px;
  color: white;
`;

const MenuItem = ({
  iconName, title, dispatch
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
    }) => node.relativePath.includes(iconName));
    return foundIcon ? (
      <StyledImg
        fluid={foundIcon.node.childImageSharp.fluid}
        alt={title}
        key={foundIcon.node.childImageSharp.id}
      />
    ) : (
      <StyledDefaultImg src={DefaultImg} alt='no icon' />
    );
  };

  return (
    <StyledButton onClick={() => dispatch(changeSection(title))}>
      {showIcon()}
      <StyledSpan>{title}</StyledSpan>
    </StyledButton>
  );
};

MenuItem.propTypes = {
  iconName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(() => ({
}), null)(MenuItem);
