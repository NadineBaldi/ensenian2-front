import React, { useState } from "react";

// Material UI Components
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

// Icons
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Utils
import {
  EMPTY_FIELD,
  INVALID_PASSWORD_FORMAT,
  DIFFERENT_PASSWORD,
} from "../../constants/util";

const ForgetPassword = () => {
  // Use states
  const [newPassword, setNewPassword] = useState("");
  const [newRepeatedPassword, setNewRepeatedPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatedPassword, setShowRepeatedPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleClickShowRepeatedPassword = () =>
    setShowRepeatedPassword((show) => !show);

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
      case INVALID_PASSWORD_FORMAT:
        return "Formato de contraseña inválido";
      case DIFFERENT_PASSWORD:
        return "Las contraseñas deben coincidir";
      default:
        return "";
    }
  };

  const handleChangePassword = () => {
    if (newPassword === "") {
      setPasswordError(EMPTY_FIELD);
    }
    if (newPassword !== newRepeatedPassword) {
      setPasswordError(DIFFERENT_PASSWORD);
    }
  };

  return (
    <div className="forget-password">
      <div className="forget-password-container">
        <div className="bnt-back-container">
          <Button
            className="back-button"
            startIcon={<ArrowBackIcon />}
            href="http://localhost:3000/login"
          >
            Volver atrás
          </Button>
        </div>
        <div className="forget-password-title-container">
          <Typography variant="title" color="primary">
            Cambio de contraseña
          </Typography>
          <Typography variant="subtitle">
            ¿Olvidaste tu contraseña? Ingresá una nueva!
          </Typography>
        </div>
        <div className="text-field-container">
          <TextField
            id="newPassword"
            value={newPassword}
            label="Nueva contraseña"
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
            onChange={({ target: { value } }) => setNewPassword(value)}
            error={passwordError !== "" ? true : false}
            helperText={handleErrorMessages(passwordError)}
            onBlur={(event) => validatePassword(event.target.value)}
          />
        </div>
        <div className="text-field-container">
          <TextField
            id="newPasswordRepeated"
            value={newRepeatedPassword}
            label="Ingrese nuevamente la contraseña"
            placeholder="********"
            color="primary"
            type={showRepeatedPassword ? "text" : "password"}
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
                    onClick={handleClickShowRepeatedPassword}
                    edge="end"
                  >
                    {showRepeatedPassword ? (
                      <Visibility fontSize="small" color="primary" />
                    ) : (
                      <VisibilityOff fontSize="small" color="primary" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            style={{ marginTop: 11 }}
            onChange={({ target: { value } }) => setNewRepeatedPassword(value)}
            error={passwordError !== "" ? true : false}
            helperText={handleErrorMessages(passwordError)}
            onBlur={(event) => validatePassword(event.target.value)}
          />
        </div>
        <div className="forget-password-btn-container">
          <Button
            variant="contained"
            className="forget-password-button"
            onClick={() => handleChangePassword()}
          >
            Cambiar contraseña
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
