import { Button, TextField } from "@mui/material";
import React from "react";
import userService from "../../services/UserService";
const Login = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const onChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        height: "300px",
      }}
    >
      <div style={{ width: "60%" }}>
        <TextField label="email" value={email} onChange={onChange} fullWidth />{" "}
        <br />
        <TextField
          className="my-10"
          label="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          fullWidth
        />{" "}
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            userService
              .login(email, password)
              .then((data) => {
                console.log(data);
                window.location.href = "/";
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
