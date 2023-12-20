import "./index.css";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Router>
        <div className="bg-fixed font-poppins bg-repeat bg-hoops-background">
          <Navbar />

          <main className="isolate">
            <Routes>
              <Route
                target="_blank"
                rel="noopener noreferrer"
                path="/"
                exact
                element={<Home />}
              />
              <Route
                target="_blank"
                rel="noopener noreferrer"
                path="/contact"
                exact
                element={<Contact />}
              />
            </Routes>
            <Footer />
          </main>
        </div>
      </Router>
    </>
  );
}
