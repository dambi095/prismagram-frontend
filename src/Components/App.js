import React from 'react';
import { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import GlobalStyles from "../Styles/GlobalStyles";
import Router from './Router';

export default () => (
  <ThemeProvider theme={Theme}>
    <>
      <GlobalStyles />
      <Router isLoggedIn={false} />
    </>
  </ThemeProvider>
)

