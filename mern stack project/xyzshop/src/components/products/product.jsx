
import React from 'react';
import SingleProduct from './singleProduct';
import { Grid } from '@mui/material';
// import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import productservice from '../../services/productsurvices';
import userService from '../../services/UserService';
import Pagination from '@mui/material/Pagination';
// import Button from '@material-ui/core/Button'

// import Typography from '@mui/material/Typography';
// import { positions } from '@mui/system';




  

const Product = (props) => {
    
    const navigate = useNavigate();
    //  const page = props.match.params.page ? props.match.params.page : 1;
    const getData = () => {
        productservice.getProduct().then((data) => {
            setProduct(data.products);
            setTotal(data.total);
        }).catch((err) => {
            console.log(err);
        })
    }
   
    const [total, setTotal] = React.useState([]);
    const [products, setProduct] = React.useState([]);
    
    React.useEffect(getData, []);
    
    const handleNewProduct = () => {
        navigate("/products/new")
    
    }
    return (<div>

      
         <h1 className='bg-info'>Products Page</h1>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            {userService.isLoggedIn() &&
                <Fab color="secondary" aria-label="add"  onClick={handleNewProduct}>
            
        <AddIcon />
      </Fab>
            }
      
         
    </Box>
        
        {products.length===0? (<p>there are no products </p>):
            <Grid container spacing={3}>
                {products.map((product, index) => (
                    <SingleProduct key={index} Product={product} onDelete={ getData} />
        ))}</Grid>}
        
        <Grid item xs={12}>
            <Pagination
                count={Math.ceil(total / 3)}
                variant="outlined"
                shape="rounded"
                onChange={(e, value) => {
                    console.log(value);
                }}
            />Total={total}
        </Grid>
       
         
        
      
    </div> );
}
 
export default Product;