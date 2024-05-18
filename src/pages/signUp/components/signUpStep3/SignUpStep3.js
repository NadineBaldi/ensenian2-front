import React from "react";

// Material UI Components
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

// Icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Constants
import { universities, provinces } from "../../../../constants/signUp";
import {
  REGISTRATION_NUMBER,
  ERROR_EMPTY_FIELDS,
  INVALID_REGISTRATION_NUMBER_FORMAT,
} from "../../../../constants/util";

const SignUpStep3 = (props) => {
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
    if (universities.length) {
      return universities.map(({ id, nombre }) => (
        <MenuItem
          key={id}
          value={id}
          classes={{
            root: "menu-options",
          }}
        >
          {nombre}
        </MenuItem>
      ));
    }

    return (
      <MenuItem
        value={0}
        disabled
        classes={{
          root: "menu-options",
        }}
      >
        No hay universidades disponibles
      </MenuItem>
    );
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

    if (values[REGISTRATION_NUMBER].length <= 4) {
      newErrorMessages[REGISTRATION_NUMBER] =
        INVALID_REGISTRATION_NUMBER_FORMAT;
    } else {
      newErrorMessages[REGISTRATION_NUMBER] = "";
    }

    for (const fieldName in values) {
      if (values[fieldName].trim() === "") {
        newErrorMessages[fieldName] = ERROR_EMPTY_FIELDS;
        hasErrors = true;
      }
    }

    setErrorMessages(newErrorMessages);

    if (!hasErrors && newErrorMessages.registrationNumber === "") {
      window.location.href = "http://localhost:3000/login";
    }
  };

  return (
    <div className="page-three__container">
      <div className="page-three__bnt-back-container">
        <Button
          className="back-button"
          startIcon={<ArrowBackIcon />}
          onClick={() => setCurrentStep(2)}
        >
          Volver atrás
        </Button>
      </div>
      <div className="page-three__title-container">
        <Typography classes={{ root: "title-text" }}>
          Datos universitarios
        </Typography>
      </div>
      <div className="page-three__form-container">
        <div className="item-container-form-control">
          <FormControl
            color="primary"
            focused
            fullWidth
            error={!!errorMessages.universityProvince}
          >
            <InputLabel>Seleccionar provincia</InputLabel>
            <Select
              id="universityProvince"
              label="Seleccionar provincia"
              color="primary"
              onChange={(event) =>
                handleOnChangeSelect(event.target.value, "universityProvince")
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
            {!!errorMessages.universityProvince ? (
              <FormHelperText>
                {errorMessages.universityProvince}
              </FormHelperText>
            ) : null}
          </FormControl>
        </div>
        <div className="item-container">
          <TextField
            id="universityCity"
            value={values.universityCity}
            label="Ciudad"
            color="primary"
            focused
            InputProps={{
              className: "text-field",
            }}
            style={{ marginTop: 11 }}
            fullWidth
            onChange={(event) =>
              handleFieldChange("universityCity", event.target.value)
            }
            error={!!errorMessages.universityCity}
            helperText={errorMessages.universityCity}
          />
        </div>
        <div className="item-container">
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
              inputProps={{ disabled: !values.universityProvince }}
              classes={{
                root: "option-select",
              }}
              onChange={(event) =>
                handleOnChangeSelect(event.target.value, "university")
              }
            >
              {values?.universityProvince ? handleUniversityOptions() : null}
            </Select>
            {!!errorMessages.university ? (
              <FormHelperText>{errorMessages.university}</FormHelperText>
            ) : null}
          </FormControl>
        </div>
        <div className="item-container">
          <TextField
            id="registrationNumber"
            value={values.registrationNumber}
            label="Número de legajo"
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
      <div className="page-three__sign-up-button-container">
        <Button
          variant="contained"
          className="next-button"
          onClick={() => handleSignUp()}
        >
          Registrarse
        </Button>
        <Typography classes={{ root: "step-text" }}>
          Paso {currentStep} de 3
        </Typography>
      </div>
      <div className="page-three__log-in-container-step3">
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

export default SignUpStep3;
