import React, { useState } from "react";

// Material UI Components
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

// Icons
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

const Login = () => {
  // Use states
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-title-container">
          <Typography variant="title" color="primary">
            Inicio de sesión
          </Typography>
          <Typography variant="subtitle">
            Bienvenido nuevamente! Por favor ingresá a tu cuenta.
          </Typography>
        </div>
        <div className="text-field-container">
          <TextField
            id="email"
            label="Correo electrónico"
            placeholder="aaaa@gmail.com"
            color="primary"
            focused
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon color="primary" />
                </InputAdornment>
              ),
              className: "text-field",
            }}
            style={{ marginTop: 11 }}
          />
        </div>
        <div className="text-field-container">
          <TextField
            id="password"
            label="Contraseña"
            placeholder="********"
            color="primary"
            type="password"
            focused
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon color="primary" />
                </InputAdornment>
              ),
              className: "text-field",
            }}
            style={{ marginTop: 11 }}
          />
        </div>
        <div className="options-container">
          <div className="remember-me-container">
            <Checkbox checked={checked} onChange={handleChange} size="small" />
            <Typography classes={{ root: "text" }}>Recordarme</Typography>
          </div>
          <div>
            <Link href="#" underline="hover" className="forget-password-label">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
        </div>
        <div className="login-btn-container">
          <Button variant="contained" className="login-button">
            Iniciar sesión
          </Button>
        </div>
        <div className="sign-up-container">
          <Typography variant="subtitle">¿No tenés cuenta?</Typography>
          <Link href="#" underline="hover" className="link-sign-up">
            Registrate acá
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
