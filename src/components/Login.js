import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "./Navigation/Navigation";
import "./Login.css";


const theme = createTheme();


export default function Login() {
  const navigate = useNavigate();
//  const (email,setEmail) =useState("");
//  const (password,setPassword) =useState("");
//  const history = useHistory();
//  useEffect(() => {
//     if(localStorage.getItem('user-info')){
//         history.push("add")
//     }
//  },[]);
//  async function submit(){
//     console.warn(email,password);
//     let item =(email,password);
//     let result= await fetch("http://localhost:8080/users/all"),{
//         method
//     }
//  }

  return (
    <div className="bg-image1">
      <Navigation />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" className="login-emp">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ m: 1, bgcolor: "secondary.main" }}
              style={{ backgroundColor: "#1c060f" }}
            >
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Amazon Login
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="off"
                autoFocus
               // onChange={(e)=>setEmail(e.target.value)}
                //value={email}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="off"
               // onChange={(e)=>setPassword(e.target.value)}
                //value={password}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                id="btnlogin"
                style={{ backgroundColor: "#1c060f" }}
                //onClick={submitButton}
              >
                Sign In
              </Button>
              <p>Dont have Account?</p>
              <Button
                type="submit"
                halfWidth
                variant="contained"
                sx={{ mt: 1, mb: 1 }}
                id="btnlogin"
                style={{ backgroundColor: "#1c060f" }}
                onClick={() => {
                  navigate("/register");
                }}
              >
                 Register
              </Button>
              
            </Box>
          </Box>
        </Container>
      </ThemeProvider>

      <footer className="copyrightfooter">
        <p> Copyright &#169; By Axis Batch 9 </p>
      </footer>
    </div>
  );
}