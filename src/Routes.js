import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';

import Auth from './hooks/Auth/index.tsx';
import UseAuth from "./hooks/auth.ts"
function AppRoutes() {
  return (
    <Router>
      <UseAuth>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </UseAuth>
    </Router>
  );
}

export default AppRoutes;
