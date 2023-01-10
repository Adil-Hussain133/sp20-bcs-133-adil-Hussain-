import React from 'react'
import userService from '../../services/UserService';
import { useNavigate } from "react-router-dom";
const Admin = (props) => {
     const navigate = useNavigate();
    React.useEffect(() => {
        if (!userService.IsAdmin()) {
             navigate("/login");
        }
    })
  return <>{props.children}</>;
}

export default Admin;
