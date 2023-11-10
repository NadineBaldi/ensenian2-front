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

const SignUpStep1 = (props) => {
  const { setCurrentStep, currentStep } = props;

  // Use states
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <div className="signUp-title-container">
        <Typography
          classes={{ root: "signUp-title" }}
          align="left"
          color="primary"
        >
          Registro
        </Typography>
        <Typography classes={{ root: "signUp-subtitle" }} align="left">
          Create una cuenta para poder comenzar.
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
      <div className="next-button-container">
        <Button
          variant="contained"
          className="next-button"
          onClick={() => setCurrentStep(2)}
        >
          Siguiente
        </Button>
        <Typography classes={{ root: "step-text" }}>
          Paso {currentStep} de 2
        </Typography>
      </div>
      <div className="log-in-container">
        <Typography classes={{ root: "signUp-subtitle" }}>
          ¿Ya tenes una cuenta?
        </Typography>
        <Link href="#" underline="hover" className="link-log-in">
          Ingresá acá
        </Link>
      </div>
    </div>
  );
};

export default SignUpStep1;
