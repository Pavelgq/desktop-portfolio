import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { FrameLayout, DesktopLayout } from "../layouts";
import { BlankFrame } from "../pages/blank-frame/BlankFrame";
import { PortfolioFrame } from "../pages/portfolio-frame/PortfolioFrame";
import { WelcomeFrame } from "../pages/welcome-frame/WelcomeFrame";

export function RoutesList(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<DesktopLayout />}>
        <Route index element={<BlankFrame />}></Route>
        <Route path="/frame" element={<FrameLayout />}>
          <Route path="welcome" element={<WelcomeFrame />} />
          <Route path="portfolio" element={<PortfolioFrame />} />
        </Route>
      </Route>
    </Routes>
  );
}
