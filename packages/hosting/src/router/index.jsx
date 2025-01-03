import React from "react";
import { Route, Routes } from "react-router";
import { BaseLayout } from "../components/layouts/BaseLayout.jsx";
import {
  Error404,
  HomeMap,
  LoginIntegration,
  Step1Integration,
  Step2Integration,
  Step3Integration,
  Step4Integration,
  Step5Integration,
  Step6Integration,
  Step7Integration,
} from "../pages/index.js";

export const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomeMap />} />
      <Route
        exact
        path="/login"
        element={
          <BaseLayout>
            <LoginIntegration />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/repair-request/1/:repairRequestId"
        element={
          <BaseLayout>
            <Step1Integration />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/repair-request/2/:repairRequestId"
        element={
          <BaseLayout>
            <Step2Integration />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/repair-request/3/:repairRequestId"
        element={
          <BaseLayout>
            <Step3Integration />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/repair-request/4/:repairRequestId"
        element={
          <BaseLayout>
            <Step4Integration />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/repair-request/5/:repairRequestId"
        element={
          <BaseLayout>
            <Step5Integration />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/repair-request/6/:repairRequestId"
        element={
          <BaseLayout>
            <Step6Integration />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/repair-request/7/:repairRequestId"
        element={
          <BaseLayout>
            <Step7Integration />
          </BaseLayout>
        }
      />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};
