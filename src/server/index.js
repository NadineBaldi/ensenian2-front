import React, { Suspense } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { routes, publicRoutes } from "./routes";
import { getCookie } from "../commons/helpers/cookies";

// Constants
import { TOKEN } from "../constants/util";

const getRoutes = () => {
  if (getCookie(TOKEN)) {
    return routes.map((prop, index) => {
      return <Route {...prop} key={index} />;
    });
  }
  return null;
};

const getPublicRoutes = () => {
  return publicRoutes.map((prop, index) => {
    return <Route {...prop} key={index} />;
  });
};

export default (
  <BrowserRouter>
    <Suspense>
      <Routes>
        {getRoutes()}
        {getPublicRoutes()}
        <Route exact path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
