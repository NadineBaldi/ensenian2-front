import React, { Suspense } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import routes from "./routes";

const getRoutes = () => {
  return routes.map((prop, index) => {
    return <Route {...prop} key={index} />;
  });
};

export default (
  <BrowserRouter>
    <Suspense>
      <Routes>
        {getRoutes()}
        <Route exact path="/" element={<Navigate to="/signUp" />} />
        <Route path="*" element={<Navigate to="/signUp" />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
