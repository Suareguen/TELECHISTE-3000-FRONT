import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { login } from "../../services/authService";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail]  =useState('')
  const [password, setPassword]  =useState('')

  const navigate = useNavigate()

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async () => {
    const formData = {
      email, password
    }

    const result = await login(formData)
    navigate('/profile')
  }


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <h1 style={{ width: "100px" }}>Login</h1>

      <Box
        sx={{ width: '500px', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: 'space-between' }}
      >
        <label> Email: 
          <TextField  onChange={handleEmail} id="outlined-basic" label="Email" variant="outlined" />
        </label>
        <label> Password: 
          <TextField  onChange={handlePassword} id="outlined-basic" label="Password" variant="outlined" />
        </label>
        <Button onClick={handleSubmit} variant="contained">
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
