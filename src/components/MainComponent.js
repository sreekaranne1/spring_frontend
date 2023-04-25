import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import SignUpComponent from "./SignUpComponent";
import DetailComponent from "./DetailComponent";

function MainComponent() {
  return (
    <Routes>
      <Route index element={<LoginComponent />} />
      <Route path="signup" element={<SignUpComponent />} />
      <Route path="card/*" element={<DetailComponent />} />
    </Routes>
  );
}

export default MainComponent;
