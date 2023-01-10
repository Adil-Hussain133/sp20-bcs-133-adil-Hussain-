import React from "react";
import LandingPage from "./components/landingpage";
import Product from "./components/products/product";
import NewProduct from "./components/products/NewProduct";
import UpdateProduct from "./components/products/UpdateProduct";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopMenu from "./components/topmenue";
import Contectus from "./components/contectus";
import Notfound from "./components/notfount";
import Login from "./components/auth/login";
import Register from "./components/auth/register";

import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <div>
        <ToastContainer />
        <TopMenu />

        <div style={{ padding: "60px" }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products/:page?" element={<Product />} />
            <Route path="/products/new" element={<NewProduct />} />
            <Route path="/products/update/:id" element={<UpdateProduct />} />
            <Route path="/contectus" element={<Contectus />} />
            {/* <Route path="/not-found" element = {<Notfound/>}/> */}
            <Route path="/" element={<LandingPage />} />

            {/* when the invalid route is provided thiscode redirect to page not found route */}
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
