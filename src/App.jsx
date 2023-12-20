import "./index.css";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactEventOperators from "./pages/ContactEventOperators";
import ContactEventAttendees from "./pages/ContactEventAttendees";
import ContactHoteliers from "./pages/ContactHoteliers";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/Error404";

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
                path="/contact-event-ops"
                exact
                element={<ContactEventOperators />}
              />
              <Route
                target="_blank"
                rel="noopener noreferrer"
                path="/contact-event-attendees"
                exact
                element={<ContactEventAttendees />}
              />
              <Route
                target="_blank"
                rel="noopener noreferrer"
                path="/contact-event-hoteliers"
                exact
                element={<ContactHoteliers />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </main>
        </div>
      </Router>
    </>
  );
}
