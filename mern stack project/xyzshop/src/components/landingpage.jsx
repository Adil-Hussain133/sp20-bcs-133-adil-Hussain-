import React from "react";
import Footer from "../components/layout/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Carousel from "./layout/Carousel";
const LandingPage = () => {
  return (
    <div>
      <Carousel />
      <Footer />
    </div>
  );
};

export default LandingPage;
