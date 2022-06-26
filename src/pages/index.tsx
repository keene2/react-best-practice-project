import { lazy } from "react";
import NotFoundPage from './404'
import HomePage from './home'
import { Routes, Route } from "react-router-dom";


export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/404" element={<NotFoundPage />} />
    </Routes>

  );
};