import { Button, TextField } from '@mui/material';
import React from 'react';
import userService from '../../services/UserService';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Register = (props) => {
      const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [ password, setPassword ] = React.useState('');
 
    return (<div style={{
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        height:"300px"
    }}>
        <div style={{ width: "60%" }}>
            <TextField label="name" value={name} onChange={e=>{setName(e.target.value)}} fullWidth/> <br />
            <TextField label="email"  fullWidth value={email} onChange={e=>{setEmail(e.target.value)}} /> <br />
            <TextField label="password" m type="password"  fullWidth value={password} onChange={e=>{setPassword(e.target.value)}} /> <br />
            <Button variant='contained' color='primary' onClick={(e) => {
                userService.register(name, email, password)
                    .then((data) => {
                        console.log(data);
                        navigate("/login");
                    }).catch(err => {
                        console.log(err);
                         toast.error(err.response.data, {
                         position: toast.POSITION.TOP_LEFT
      });
                })
            }}>Register</Button>

        </div>
        </div> );
}
 
export default Register;
