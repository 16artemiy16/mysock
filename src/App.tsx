import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { getGuestRoutes } from './pages/Guest/guestRoutes';
import { getAuthedRoutes } from './pages/Authed/authedRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          { getGuestRoutes('') }
          { getAuthedRoutes('') }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
