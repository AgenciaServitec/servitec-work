import React from "react";
import { Route, Routes } from "react-router";
import { BaseLayout } from "../components/layouts/BaseLayout.jsx";
import { LoginIntegration, HomeMap, Issues } from "../pages/index.js";

export const Router = () => {
  return (
    <Routes>
      <Route
        exact
        path="/login"
        element={
          <BaseLayout>
            <LoginIntegration />
          </BaseLayout>
        }
      />
      <Route exact path="/" element={<HomeMap />} />
      <Route
        exact
        path="/issues"
        element={
          <BaseLayout>
            <Issues />
          </BaseLayout>
        }
      />
      <Route path="*" element={<h1>TU PÁGINA NO EXISTE</h1>} />
    </Routes>
  );
};
