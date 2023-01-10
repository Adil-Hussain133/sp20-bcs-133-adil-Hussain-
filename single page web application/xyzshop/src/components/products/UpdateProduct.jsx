import { Button, Grid, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import React from "react";

import productservice from "../../services/productsurvices";
import Admin from "../auth/Admin";

const UpdateProduct = (props) => {
  const navigate = useNavigate();
  const Params = useParams();
  let id = Params.id;

  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0);

  React.useEffect(() => {
    productservice.getSingleProduct(id).then((data) => {
      setName(data.name);
      setPrice(data.price);
    });
  }, []);

    return (
      <Admin>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1>update product</h1>
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
                productservice
                  .updateProduct(id, { name, price })
                  .then((data) => {
                    console.log(data);
                    navigate("/products");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Update Product{" "}
            </Button>
          </Grid>
        </Grid>
      </Admin>
    );
};

export default UpdateProduct;
