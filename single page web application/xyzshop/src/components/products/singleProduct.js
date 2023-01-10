import React from 'react';
import { Button, Grid } from '@mui/material';
 import { useNavigate } from 'react-router-dom';
import productservice from '../../services/productsurvices';
import userService from '../../services/UserService';

const SingleProduct = ({ Product, onDelete }) => {
    const navigate = useNavigate();
    
    
    return (<Grid item xs={4}>
        <h2>{Product.name} </h2>
        {userService.IsAdmin() &&
            <>
            <Button variant='contained' color='secondary'
            onClick={e => {
                console.log("navigate to update");
                navigate("/products/update/"+Product._id)
            }}
        >Edit</Button>
            <Button variant='contained' color='primary' onClick={(e) => {
                productservice.deleteProduct(Product._id)
                    .then((data) => {
                        console.log(data);
                        onDelete();
                })
                    .catch((err) => {
                        console.log(err);
                })
        }}>Delete</Button>
            </>
        
        }
            
        <p>{Product.price}</p>
        <hr />
    </Grid> );
}
 
export default  SingleProduct;