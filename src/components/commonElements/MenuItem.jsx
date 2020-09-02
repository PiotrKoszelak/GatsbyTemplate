import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    jusitfy-content: center;
    cursor: pointer;
    margin: 0 10px;
`;

const StyledImg = styled(Img)`
    width: 16px;
    height: 16px;
`;

const StyledSpan = styled.span`
    font-size: 12px;
    color: white;
`;

const MenuItem = ({ iconName, title }) => {
  const Icon = useStaticQuery(
    graphql`
    {
      icons: allFile(
        filter: { absolutePath: { regex: "/icons/" } }
      ) {
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
        `,
  );

  const showIcon = () => Icon.icons.edges.map(({ node }) => (node.relativePath.includes(iconName)
    ? <StyledImg fluid={node.childImageSharp.fluid} alt={title} key={node.childImageSharp.id} />
    : null));

  return (
    <StyledDiv>
      {showIcon()}
      <StyledSpan>{title}</StyledSpan>
    </StyledDiv>
  );
};

MenuItem.propTypes = {
  iconName: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
};

export default MenuItem;
