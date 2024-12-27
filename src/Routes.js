import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Auth from "./hooks/auth.ts"
function AppRoutes() {
  return (
    <Router>
      <Auth>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Auth>
    </Router>
  );
}

export default AppRoutes;
