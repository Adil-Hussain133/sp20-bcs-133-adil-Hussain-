import { Button, Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";

import productservice from "../../services/productsurvices";
import Auth from "../auth/Auth";

const NewProduct = (props) => {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0);
    return (
      <Auth>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1>Add new product</h1>
          </Grid>

          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <TextField
              label="name"
              fullWidth
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextField
              label="price"
              fullWidth
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={9}>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                console.log("request is sent to add new product");
                productservice
                  .addProduct({ name, price })
                  .then((data) => {
                    console.log(data);
                    navigate("/products");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Add New Product{" "}
            </Button>
          </Grid>
        </Grid>
      </Auth>
    );
};

export default NewProduct;
