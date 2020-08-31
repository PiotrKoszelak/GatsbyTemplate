import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import styled from "styled-components"
import theme from "./theme"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
`

const Main = styled.main`
  width: 100vw;
  height: 100vh;
`

const Layout = ({ children }) => {

  return (
    <ThemeProvider theme={theme} >
        <>
            <GlobalStyle />
            <Main>
              {children}
            </Main>
        </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  children: <div>Brak elementów do wyświetlenia</div>
}

export default Layout
