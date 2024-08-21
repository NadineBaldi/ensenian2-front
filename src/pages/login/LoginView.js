import React, { useState, useEffect } from "react";

//hook
import useFetchLogin from "./hooks/hooks";

// Material UI Components
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

// Icons
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// Utils
import {
  EMPTY_FIELD,
  INVALID_EMAIL_FORMAT,
  INVALID_PASSWORD_FORMAT,
  LOGIN_ERROR,
  TOKEN,
} from "../../constants/util";

import { getCookie } from "../../commons/helpers/cookies";

const Login = () => {
  // Use states
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Token
  const token = getCookie(TOKEN);

  const { error, loginTeacher } = useFetchLogin();

  useEffect(() => {
    if (token) {
      window.location.href = "http://localhost:3000/courses";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const validateEmail = (newEmail) => {
    let regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/i;
    if (!regex.test(newEmail)) {
      setEmailError(INVALID_EMAIL_FORMAT);
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (newPass) => {
    if (newPass.length <= 7) {
      setPasswordError(INVALID_PASSWORD_FORMAT);
    } else {
      setPasswordError("");
    }
  };

  const handleErrorMessages = (errorType) => {
    switch (errorType) {
      case EMPTY_FIELD:
        return "El campo no puede quedar vacío";
      case INVALID_EMAIL_FORMAT:
        return INVALID_EMAIL_FORMAT;
      case INVALID_PASSWORD_FORMAT:
        return INVALID_PASSWORD_FORMAT;
      default:
        return "";
    }
  };

  const handleLogin = () => {
    if (!email) {
      setEmailError(EMPTY_FIELD);
      return;
    }
    if (!password) {
      setPasswordError(EMPTY_FIELD);
      return;
    }

    loginTeacher(email, password);
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
            value={email}
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
            onChange={(event) => setEmail(event.target.value)}
            error={emailError !== "" ? true : false}
            helperText={handleErrorMessages(emailError)}
            onBlur={(event) => validateEmail(event.target.value)}
          />
        </div>
        <div className="text-field-container">
          <TextField
            id="password"
            value={password}
            label="Contraseña"
            placeholder="********"
            color="primary"
            type={showPassword ? "text" : "password"}
            focused
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon color="primary" />
                </InputAdornment>
              ),
              className: "text-field",
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? (
                      <Visibility fontSize="small" color="primary" />
                    ) : (
                      <VisibilityOff fontSize="small" color="primary" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            style={{ marginTop: 11 }}
            onChange={({ target: { value } }) => setPassword(value)}
            error={passwordError !== "" ? true : false}
            helperText={handleErrorMessages(passwordError)}
            onBlur={(event) => validatePassword(event.target.value)}
          />
        </div>
        <div className="options-container">
          <div className="remember-me-container">
            <Checkbox checked={checked} onChange={handleChange} size="small" />
            <Typography classes={{ root: "text" }}>Recordarme</Typography>
          </div>
          <div>
            <Link
              href="http://localhost:3000/forgetPassword"
              underline="hover"
              className="forget-password-label"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
        </div>
        {error && (
          <div className="login-message-container">
            <Alert variant="filled" severity="error">
              {LOGIN_ERROR}
            </Alert>
          </div>
        )}
        <div className="login-btn-container">
          <Button
            variant="contained"
            className="login-button"
            onClick={() => handleLogin()}
          >
            Iniciar sesión
          </Button>
        </div>
        <div className="sign-up-container">
          <Typography variant="subtitle">¿No tenés cuenta?</Typography>
          <Link
            href="http://localhost:3000/signUp"
            underline="hover"
            className="link-sign-up"
          >
            Registrate acá
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
