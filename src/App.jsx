import "./index.css";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/Error404";
import Attendees from "./pages/Attendees";
import Hoteliers from "./pages/Hoteliers";
import EventOps from "./pages/EventOps";

export default function App() {
  return (
    <>
      <Banner />
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
                element={<ContactPage />}
              />
              <Route
                target="_blank"
                rel="noopener noreferrer"
                path="/attendees"
                exact
                element={<Attendees />}
              />
              <Route
                target="_blank"
                rel="noopener noreferrer"
                path="/event-ops"
                exact
                element={<EventOps />}
              />
              <Route
                target="_blank"
                rel="noopener noreferrer"
                path="/hoteliers"
                exact
                element={<Hoteliers />}
              />

              <Route
                rel="noopener noreferrer"
                target="_blank"
                path="*"
                element={<NotFound />}
              />
            </Routes>
            <Footer />
          </main>
        </div>
      </Router>
    </>
  );
}
