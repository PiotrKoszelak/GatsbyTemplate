import React from 'react';
import styled from 'styled-components';
import {
  connect
} from 'react-redux';
import PropTypes from 'prop-types';
import LoginContent from './loginContent';

const StyledSection = styled.section`
  padding: 20px;
`;

const StyledTitle = styled.div`
  font-size: 20px;
  margin: 20px 0;
  text-align: center;
`;

const StyledContent = styled.div`
  display: flex;
  font-size: 15px;
  align-items: center;
  flex-direction: column;
`;

const renderContent = sectionName => {
  switch (sectionName) {
    case 'login':
      return <LoginContent />;
    case 'contact':
      return <span>Contact content</span>;
    default:
      return <span>Deafult content</span>;
  }
};

const content = ({
  sectionName
}) => (
  <StyledSection>
    <StyledTitle>{sectionName}</StyledTitle>
    <StyledContent>{renderContent(sectionName)}</StyledContent>
  </StyledSection>
);

content.propTypes = {
  sectionName: PropTypes.string.isRequired
};

export default connect(
  state => ({
    sectionName: state.other.sectionName
  }),
  null
)(content);
