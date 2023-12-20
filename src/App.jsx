import "./index.css";
import React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
