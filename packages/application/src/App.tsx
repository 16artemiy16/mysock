import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import store from './store/stores';
import { getGuestRoutes } from './pages/Guest/guestRoutes';
import { getAuthedRoutes } from './pages/Authed/authedRoutes';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.styles';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
