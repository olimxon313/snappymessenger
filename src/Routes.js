import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
<<<<<<< HEAD
import Auth from "./hooks/auth.ts"
function AppRoutes() {
  return (
    <Router>
      <Auth>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Auth>
=======
import Auth from './hooks/Auth/index.tsx';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
>>>>>>> 809875afd040da444b968fcb26fcc18b33a12c22
    </Router>
  );
}

export default AppRoutes;
