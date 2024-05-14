import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, LightTheme, DarkTheme } from './styles/styled';

const Homepage = lazy(() => import('./pages/Homepage'));
const CountryDetailsPage = lazy(() => import('./pages/CountryDetailsPage'));

const App = () => {
  const [theme, setTheme] = useState(LightTheme);

  const toggleTheme = () => {
    setTheme(theme === LightTheme ? DarkTheme : LightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/">
              <Homepage toggleTheme={toggleTheme} />
            </Route>
            <Route path="/country/:countryName">
              <CountryDetailsPage />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default App;