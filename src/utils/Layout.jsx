import React from 'react';
import PropTypes from 'prop-types';
import styled, {
  createGlobalStyle, ThemeProvider
} from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Lato';
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

const Main = styled.main`
  width: 100vw;
  height: 100vh;
`;

const Layout = ({
  children
}) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Main>
      {children}
    </Main>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
