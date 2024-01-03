import React, { useState } from "react";

// Material UI Components
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

// Icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Constants
import { universities, provinces } from "../../../../constants/signUp";

const SignUpStep2 = (props) => {
  const { setCurrentStep, currentStep } = props;

  const [selectedProvince, setSelectedProvince] = useState(null);

  const handleUniversityOptions = () => {
    const universitiesFiltered = universities.find(
      ({ province }) => province === selectedProvince
    );
    return universitiesFiltered.universitiesList.map((uni) => (
      <MenuItem
        key={uni}
        value={uni}
        classes={{
          root: "menu-options",
        }}
      >
        {uni}
      </MenuItem>
    ));
  };

  return (
    <div className="page-two-container">
      <div className="bnt-back-container">
        <Button
          className="back-button"
          startIcon={<ArrowBackIcon />}
          onClick={() => setCurrentStep(1)}
        >
          Volver atrás
        </Button>
      </div>
      <div className="form-container">
        <div className="item-container">
          <TextField
            id="nombre"
            label="Nombre"
            color="primary"
            focused
            InputProps={{
              className: "text-field",
            }}
            style={{ marginTop: 11 }}
            fullWidth
          />
        </div>
        <div className="item-container">
          <TextField
            id="apellido"
            label="Apellido"
            color="primary"
            focused
            InputProps={{
              className: "text-field",
            }}
            style={{ marginTop: 11 }}
            fullWidth
          />
        </div>
        <div className="item-container">
          <TextField
            id="fechaNac"
            label="Fecha de nacimiento"
            color="primary"
            type="date"
            focused
            InputProps={{
              className: "text-field",
            }}
            style={{ marginTop: 11 }}
            fullWidth
          />
        </div>
        <div className="item-container">
          <TextField
            id="DNI"
            label="DNI"
            color="primary"
            focused
            InputProps={{
              className: "text-field",
            }}
            style={{ marginTop: 11 }}
            fullWidth
          />
        </div>
        <div className="item-container-form-control">
          <FormControl color="primary" focused fullWidth>
            <InputLabel>Seleccionar provincia</InputLabel>
            <Select
              id="provincia"
              label="Seleccionar provincia"
              color="primary"
              onChange={(event) => setSelectedProvince(event.target.value)}
              classes={{
                root: "option-select",
              }}
            >
              {provinces.map((prov) => (
                <MenuItem
                  key={prov}
                  value={prov}
                  classes={{
                    root: "menu-options",
                  }}
                >
                  {prov}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="item-container">
          <TextField
            id="ciudad"
            label="Ciudad"
            color="primary"
            focused
            InputProps={{
              className: "text-field",
            }}
            style={{ marginTop: 11 }}
            fullWidth
          />
        </div>
        <div className="item-container">
          <TextField
            id="domicilio"
            label="Domicilio"
            color="primary"
            focused
            InputProps={{
              className: "text-field",
            }}
            style={{ marginTop: 11 }}
            fullWidth
          />
        </div>
        <div className="item-container">
          <TextField
            id="matricula"
            label="Número de matrícula"
            color="primary"
            focused
            InputProps={{
              className: "text-field",
            }}
            style={{ marginTop: 11 }}
            fullWidth
          />
        </div>
      </div>
      <div className="uni-container">
        <FormControl color="primary" focused fullWidth>
          <InputLabel size="small">Seleccionar universidad</InputLabel>
          <Select
            id="universidad"
            label="Seleccionar universidad"
            color="primary"
            inputProps={{ disabled: !selectedProvince }}
            classes={{
              root: "option-select",
            }}
          >
            {selectedProvince && handleUniversityOptions()}
          </Select>
        </FormControl>
      </div>
      <div className="sign-up-button-container">
        <Button
          variant="contained"
          className="next-button"
          onClick={() => setCurrentStep(2)}
        >
          Registrarse
        </Button>
        <Typography classes={{ root: "step-text" }}>
          Paso {currentStep} de 2
        </Typography>
      </div>
      <div className="log-in-container-step2">
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

export default SignUpStep2;
