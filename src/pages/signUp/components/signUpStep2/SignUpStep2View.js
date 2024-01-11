import React from "react";

// Material UI Components
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
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
  const {
    setCurrentStep,
    currentStep,
    values,
    setValues,
    errorMessages,
    setErrorMessages,
    handleFieldChange,
  } = props;

  const handleUniversityOptions = () => {
    const universitiesFiltered = universities.find(
      ({ province }) => province === values?.provinceSelected
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

  const handleOnChangeSelect = (event, fieldName) => {
    setValues({
      ...values,
      [fieldName]: event,
    });

    // Clean message error
    setErrorMessages({
      ...errorMessages,
      [fieldName]: "",
    });
  };

  const handleSignUp = () => {
    let hasErrors = false;
    const newErrorMessages = {};

    for (const fieldName in values) {
      if (values[fieldName].trim() === "") {
        newErrorMessages[fieldName] = "El campo no puede quedar vacío";
        hasErrors = true;
      }
    }

    setErrorMessages(newErrorMessages);

    if (!hasErrors) {
      window.location.href = "http://localhost:3000/login";
    }
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
            value={values.name}
            label="Nombre"
            color="primary"
            focused
            InputProps={{
              className: "text-field",
            }}
            style={{ marginTop: 11 }}
            fullWidth
            onChange={(event) => handleFieldChange("name", event.target.value)}
            error={!!errorMessages.name}
            helperText={errorMessages.name}
          />
        </div>
        <div className="item-container">
          <TextField
            id="apellido"
            value={values.lastName}
            label="Apellido"
            color="primary"
            focused
            InputProps={{
              className: "text-field",
            }}
            style={{ marginTop: 11 }}
            fullWidth
            onChange={(event) =>
              handleFieldChange("lastName", event.target.value)
            }
            error={!!errorMessages.lastName}
            helperText={errorMessages.lastName}
          />
        </div>
        <div className="item-container">
          <TextField
            id="fechaNac"
            value={values.birthdate}
            label="Fecha de nacimiento"
            color="primary"
            type="date"
            focused
            InputProps={{
              className: "text-field",
            }}
            style={{ marginTop: 11 }}
            fullWidth
            onChange={(event) =>
              handleFieldChange("birthdate", event.target.value)
            }
            error={!!errorMessages.birthdate}
            helperText={errorMessages.birthdate}
          />
        </div>
        <div className="item-container">
          <TextField
            id="DNI"
            value={values.dni}
            label="DNI"
            color="primary"
            type="number"
            focused
            InputProps={{
              className: "text-field",
            }}
            style={{ marginTop: 11 }}
            fullWidth
            onChange={(event) => handleFieldChange("dni", event.target.value)}
            error={!!errorMessages.dni}
            helperText={errorMessages.dni}
          />
        </div>
        <div className="item-container-form-control">
          <FormControl
            color="primary"
            focused
            fullWidth
            error={!!errorMessages.provinceSelected}
          >
            <InputLabel>Seleccionar provincia</InputLabel>
            <Select
              id="provincia"
              label="Seleccionar provincia"
              color="primary"
              onChange={(event) =>
                handleOnChangeSelect(event.target.value, "provinceSelected")
              }
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
            {!!errorMessages.provinceSelected ? (
              <FormHelperText>{errorMessages.provinceSelected}</FormHelperText>
            ) : null}
          </FormControl>
        </div>
        <div className="item-container">
          <TextField
            id="ciudad"
            value={values.city}
            label="Ciudad"
            color="primary"
            focused
            InputProps={{
              className: "text-field",
            }}
            style={{ marginTop: 11 }}
            fullWidth
            onChange={(event) => handleFieldChange("city", event.target.value)}
            error={!!errorMessages.city}
            helperText={errorMessages.city}
          />
        </div>
        <div className="item-container">
          <TextField
            id="domicilio"
            value={values.domicile}
            label="Domicilio"
            color="primary"
            focused
            InputProps={{
              className: "text-field",
            }}
            style={{ marginTop: 11 }}
            fullWidth
            onChange={(event) =>
              handleFieldChange("domicile", event.target.value)
            }
            error={!!errorMessages.domicile}
            helperText={errorMessages.domicile}
          />
        </div>
        <div className="item-container">
          <TextField
            id="matricula"
            value={values.registrationNumber}
            label="Número de matrícula"
            color="primary"
            type="number"
            focused
            InputProps={{
              className: "text-field",
            }}
            style={{ marginTop: 11 }}
            fullWidth
            onChange={(event) =>
              handleFieldChange("registrationNumber", event.target.value)
            }
            error={!!errorMessages.registrationNumber}
            helperText={errorMessages.registrationNumber}
          />
        </div>
      </div>
      <div className="uni-container">
        <FormControl
          color="primary"
          focused
          fullWidth
          error={!!errorMessages.university}
        >
          <InputLabel size="small">Seleccionar universidad</InputLabel>
          <Select
            id="universidad"
            label="Seleccionar universidad"
            color="primary"
            inputProps={{ disabled: !values.provinceSelected }}
            classes={{
              root: "option-select",
            }}
            onChange={(event) =>
              handleOnChangeSelect(event.target.value, "university")
            }
          >
            {values?.provinceSelected ? handleUniversityOptions() : null}
          </Select>
          {!!errorMessages.university ? (
            <FormHelperText>{errorMessages.university}</FormHelperText>
          ) : null}
        </FormControl>
      </div>
      <div className="sign-up-button-container">
        <Button
          variant="contained"
          className="next-button"
          onClick={() => handleSignUp()}
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
