import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Hub } from "../pages/Hub";
import { Blog } from "../pages/Blog";
import { SoftwareDevelopment } from "../pages/services/SoftwareDevelopment";
import { CustomSoftware } from "../pages/services/CustomSoftware";
import { DigitalMarketing } from "../pages/services/DigitalMarketing";
import { Branding } from "../pages/services/Branding";
import { SoftwareOutsourcing } from "../pages/services/SoftwareOutsourcing";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
        />
        <Route
          path="/services"
        >
          <Route
            path="software-development"
            element={
              <SoftwareDevelopment />
            }
          />
          <Route
            path="custom-software"
            element={
              <CustomSoftware />
            }
          />
          <Route
            path="software-outsourcing"
            element={
              <SoftwareOutsourcing />
            }
          />
          <Route
            path="digital-marketing"
            element={
              <DigitalMarketing />
            }
          />
          <Route
            path="branding"
            element={
              <Branding />
            }
          />
        </Route>
        <Route
          path="/hub"
          element={
            <Hub />
          }
        />
        <Route
          path="/blog"
          element={
            <Blog />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};