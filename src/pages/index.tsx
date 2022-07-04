import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from './404';
import HomePage from './home';

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/404" element={<NotFoundPage />} />
    </Routes>
  );
}
