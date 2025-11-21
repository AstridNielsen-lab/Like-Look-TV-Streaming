import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import SplashScreen from './components/SplashScreen';

function App() {
  return (
    <>
      <SplashScreen />
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/auth" replace />} />
      </Routes>
    </>
  );
}

export default App