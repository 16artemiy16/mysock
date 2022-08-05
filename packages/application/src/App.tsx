import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { getGuestRoutes } from './pages/Guest/guestRoutes';
import { getAuthedRoutes } from './pages/Authed/authedRoutes';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            { getGuestRoutes('') }
            { getAuthedRoutes('') }
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
