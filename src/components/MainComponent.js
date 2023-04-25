import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import SignUpComponent from "./SignUpComponent";
import DetailComponent from "./DetailComponent";
import UserComponent from "./UserComponent";

function MainComponent() {
  return (
    <Routes>
      <Route index element={<LoginComponent />} />
      <Route path="signup" element={<SignUpComponent />} />
      <Route path="card/*" element={<DetailComponent />} />
      <Route path="user" element={<UserComponent />} />
    </Routes>
  );
}

export default MainComponent;
