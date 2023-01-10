import React from "react";
import { Link } from "react-router-dom";
import userService from "../services/UserService";

import { AppBar, Button, Toolbar, Typography } from "@mui/material";

const TopMenu = () => {
  return (
    <AppBar position="static" className="bg-info text-align-center text-center">
      <Toolbar>
        <Typography variant="h6">
          <Link to="/" style={{ color: "white", paddingRight: "1rem" }}>
            Home
          </Link>
          <Link to="/products" style={{ color: "white", paddingRight: "1rem" }}>
            Products
          </Link>
          {/* <Link to="/products/new" style={{ color: "white", paddingRight:"1rem" }}>New Products</Link> */}
          <Link
            to="/contectus"
            style={{ color: "white", paddingRight: "1rem" }}
          >
            Contect Us
          </Link>
          {!userService.isLoggedIn() ? (
            <>
              <Link
                to="/login"
                style={{ color: "white", paddingRight: "1rem", float: "right" }}
                className="d-flex d-inline justify-content-center align-item-center"
              >
                Login
              </Link>
              <Link
                to="/register"
                style={{ color: "white", paddingRight: "1rem" }}
              >
                Register
              </Link>
            </>
          ) : (
            <Button
              variant="contained"
              color="primary"
              className="d-flex justify-content-center"
              style={{ float: "right" }}
              onClick={(e) => {
                userService.logout();
                window.location.reload();
              }}
            >
              Logout {userService.getLoggedIn().name}{" "}
            </Button>
          )}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopMenu;
