import React from "react";
// import{ Card } from 'react-rainbow-components's
import { Typography } from '@mui/material'
import Nav from "../Nav/Nav";





const Login =()=> {


return(
  <div>
    <Nav/>
    <div className="login">
      <div className="login__content">
        <h1>Sign In</h1>
{/* 
        <img src={logo} alt="entrar" className="login__logo" width={80} /> */}

        <div className="login__title">
          {/* <a href="#" role="button" onClick={login} className="login__logo"> */}
            <Typography variant="h5">Inicia sesión</Typography>
          {/* </a> */}
        </div>
        <div className="login__subtitle">
          <Typography variant="h6">
            Bienvenido 
          </Typography>
        </div>
      </div>
      <div className="login__background"> </div>
    </div>
    </div>
)





}
export default Login