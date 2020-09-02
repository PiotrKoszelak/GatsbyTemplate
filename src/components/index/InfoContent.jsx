import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSection = styled.section`
    padding: 20px;
`;

const StyledTitle = styled.div`
    font-size: 20px;
    margin: 20px 0;
    text-align: center;
`;

const StyledContent = styled.div`
    font-size: 15px;
`;

const InfoContent = () => (
  <StyledSection>
    <StyledTitle>Title</StyledTitle>
    <StyledContent>Content</StyledContent>
  </StyledSection>
);

InfoContent.propTypes = {

};

export default InfoContent;
