import React, { useEffect } from "react";

//hook
import useFetchCommon from "../../hooks";

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
import {
  DNI,
  PHONE,
  ERROR_EMPTY_FIELDS,
  INVALID_DNI_FORMAT,
  PROVINCE_SELECTED,
  INVALID_PHONE_NUMBER_FORMAT,
} from "../../../../constants/util";

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
  const { provinces, universities, loadProvinces, loadUniversities } =
    useFetchCommon();

  useEffect(() => {
    if (values[PROVINCE_SELECTED]) loadUniversities(values[PROVINCE_SELECTED]);
  }, [values[PROVINCE_SELECTED]]);

  useEffect(() => {
    loadProvinces();
  }, []);

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

  const showNextStep = () => {
    let hasErrors = false;
    const newErrorMessages = {};

    if (values[DNI].length <= 6) {
      newErrorMessages[DNI] = INVALID_DNI_FORMAT;
    } else {
      newErrorMessages[DNI] = "";
    }

    if (values[PHONE].length <= 4) {
      newErrorMessages[PHONE] = INVALID_PHONE_NUMBER_FORMAT;
    } else {
      newErrorMessages[PHONE] = "";
    }

    for (const fieldName in values) {
      if (
        values[fieldName].trim() === "" &&
        fieldName !== "universityProvince" &&
        fieldName !== "universityCity" &&
        fieldName !== "registrationNumber" &&
        fieldName !== "university"
      ) {
        newErrorMessages[fieldName] = ERROR_EMPTY_FIELDS;
        hasErrors = true;
      }
    }

    setErrorMessages(newErrorMessages);

    if (!hasErrors && newErrorMessages.dni === "") {
      setCurrentStep(3);
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
      <div className="title-page-two-container">
        <Typography classes={{ root: "title-text" }}>
          Datos personales
        </Typography>
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
              {provinces.map(({ id, nombre }) => (
                <MenuItem
                  key={id}
                  value={id}
                  classes={{
                    root: "menu-options",
                  }}
                >
                  {nombre}
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
            id="phone"
            value={values.phone}
            label="Número de celular"
            color="primary"
            type="number"
            focused
            InputProps={{
              className: "text-field",
            }}
            style={{ marginTop: 11 }}
            fullWidth
            onChange={(event) => handleFieldChange("phone", event.target.value)}
            error={!!errorMessages.phone}
            helperText={errorMessages.phone}
          />
        </div>
      </div>
      <div className="sign-up-button-container">
        <Button
          variant="contained"
          className="next-button"
          onClick={() => showNextStep()}
        >
          Siguiente
        </Button>
        <Typography classes={{ root: "step-text" }}>
          Paso {currentStep} de 3
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
