import React, { useState } from "react";

// Material UI Components
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
  INVALID_EMAIL_FORMAT,
  INVALID_PASSWORD_FORMAT,
} from "../../../../constants/util";

const SignUpStep1 = (props) => {
  const {
    setCurrentStep,
    currentStep,
    values,
    errorMessages,
    setErrorMessages,
    handleFieldChange,
  } = props;

  // Use states
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorTermsAndConditionsMessage, setErrorTermsAndConditionsMessage] =
    useState("");

  const handleChange = () => {
    setChecked(!checked);
    setErrorTermsAndConditionsMessage("");
  };

  const getEmailErrorMessage = () => {
    let regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/i;

    if (values["email"] === "") {
      return "El campo no puede quedar vacío";
    } else if (!regex.test(values["email"])) {
      return INVALID_EMAIL_FORMAT;
    }
    return "";
  };

  const getPasswordErrorMessage = () => {
    if (values["password"] === "") {
      return "El campo no puede quedar vacío";
    } else if (values["email"].length <= 7) {
      return INVALID_PASSWORD_FORMAT;
    }
    return "";
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const showNextStep = () => {
    debugger;
    const newErrorMessages = {
      email: getEmailErrorMessage(),
      password: getPasswordErrorMessage(),
    };

    if (!checked) {
      setErrorTermsAndConditionsMessage(
        "*Debes aceptar los términos y condiciones para continuar."
      );
    } else {
      setErrorTermsAndConditionsMessage("");
    }

    setErrorMessages(newErrorMessages);

    if (
      newErrorMessages.email === "" &&
      newErrorMessages.password === "" &&
      checked
    ) {
      setCurrentStep(2);
    }
  };

  return (
    <div>
      <div className="signUp-title-container">
        <Typography variant="title" color="primary">
          Registro
        </Typography>
        <Typography variant="subtitle">
          Create una cuenta para poder comenzar.
        </Typography>
      </div>
      <div className="text-field-container">
        <TextField
          id="email"
          value={values.email}
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
          onChange={(event) => handleFieldChange("email", event.target.value)}
          error={!!errorMessages.email}
          helperText={errorMessages.email}
        />
      </div>
      <div className="text-field-container">
        <TextField
          id="password"
          value={values.password}
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
          onChange={(event) =>
            handleFieldChange("password", event.target.value)
          }
          error={!!errorMessages.password}
          helperText={errorMessages.password}
          // onBlur={(event) => validatePassword(event.target.value)}
        />
      </div>
      <div className="terms-and-conditions-container-with-error">
        <div className="terms-and-conditions-container">
          <Checkbox checked={checked} onChange={handleChange} size="small" />
          <div className="terms-and-conditions-text">
            <Typography classes={{ root: "text" }}>
              Estoy de acuerdo con los
            </Typography>
            <Link href="#" underline="hover" className="link-terms-and-cond">
              términos y condiciones.
            </Link>
          </div>
        </div>
        {errorTermsAndConditionsMessage && (
          <div className="terms-and-conditions-with-error-text">
            <Typography color="error" variant="caption">
              {errorTermsAndConditionsMessage}
            </Typography>
          </div>
        )}
      </div>
      <div className="next-button-container">
        <Button
          variant="contained"
          className="next-button"
          onClick={() => showNextStep()}
        >
          Siguiente
        </Button>
        <Typography classes={{ root: "step-text" }}>
          Paso {currentStep} de 2
        </Typography>
      </div>
      <div className="log-in-container">
        <Typography variant="subtitle">¿Ya tenes una cuenta?</Typography>
        <Link
          href="http://localhost:3000/login"
          underline="hover"
          className="link-log-in"
        >
          Ingresá acá
        </Link>
      </div>
    </div>
  );
};

export default SignUpStep1;
