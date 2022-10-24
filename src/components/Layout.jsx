import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Users from "./Users";
import Contact from "./Contact";
import ErrorBoundary from "./ErrorBoundary";
const Layout = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route
          path="users"
          element={
            <ErrorBoundary>
              <Users />
            </ErrorBoundary>
          }
        />
        <Route
          path="*"
          element={<p style={{ color: "white" }}>Page not found</p>}
        />
      </Routes>
    </div>
  );
};

export default Layout;
