import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { signUp } from "../../services/authService";

function SignUp() {

  const [name, setName]  =useState('')
  const [email, setEmail]  =useState('')
  const [password, setPassword]  =useState('')

  const handleName = (event) => {
    setName(event.target.value)
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async () => {
    const formData = {
      name, email, password
    }

    const result = await signUp(formData)
    console.log(result)
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
      <h1 style={{ width: "100px" }}>SignUp</h1>

      <Box
        sx={{ width: '500px', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: 'space-between' }}
      >
        <label>
          Name:
          <TextField onChange={handleName} id="outlined-basic" label="Name" variant="outlined" />
        </label>
        <label> Email: 
          <TextField  onChange={handleEmail} id="outlined-basic" label="Email" variant="outlined" />
        </label>
        <label> Password: 
          <TextField  onChange={handlePassword} id="outlined-basic" label="Password" variant="outlined" />
        </label>
        <Button onClick={handleSubmit} variant="contained">
          Register
        </Button>
      </Box>
    </Box>
  );
}

export default SignUp;
