/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

//hook
import useFetchCommon from "../../commons/hooks/hooks";

// Material UI Components
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

// Icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Snackbar from "@mui/material/Snackbar";

// Constants
import {
  DNI,
  EMAIL,
  ERROR_EMPTY_FIELDS,
  INVALID_EMAIL_FORMAT,
  INVALID_PASSWORD_FORMAT,
  PASSWORDS_NOT_THE_SAME,
  PASSWORD,
  REGISTRATION_NUMBER,
  NAME,
  LAST_NAME,
  BIRTHDATE,
  PROVINCE_SELECTED,
  CITY,
  DOMICILE,
  UNIVERSITY,
  NEW_PASSWORD,
  NEW_PASSWORD_DUPLICATED,
  TOKEN,
} from "../../constants/util";

import { deleteCookie } from "../../commons/helpers/cookies";

const AccountData = () => {
  // Use states
  const [editData, setEditData] = useState({
    email: false,
    password: false,
    name: false,
    lastName: false,
    dateOfBirth: false,
    provinceSelected: false,
    city: false,
    address: false,
    university: false,
    newPassword: false,
    newPasswordDuplicated: false,
  });
  const [newUserData, setNewUserData] = useState({});
  const [errorMessages, setErrorMessages] = useState({
    email: "",
    password: "",
    duplicatedPass: "",
    name: "",
    lastName: "",
    dateOfBirth: "",
    provinceSelected: "",
    city: "",
    address: "",
    university: "",
    newPassword: "",
    newPasswordDuplicated: "",
  });

  const {
    provinces,
    cities,
    loadProvinces,
    loadCities,
    loadTeacherInfo,
    teacherInfo,
    snackbar,
    setSnackbar,
    updateTeacher,
    updatePassword
  } = useFetchCommon();

  useEffect(() => {
    if (newUserData[PROVINCE_SELECTED])
      loadCities(newUserData[PROVINCE_SELECTED]);
  }, [newUserData[PROVINCE_SELECTED]]);

  useEffect(() => {
    loadProvinces();
    loadTeacherInfo();
  }, []);

  useEffect(() => {
    if (teacherInfo) setNewUserData(teacherInfo);
  }, [teacherInfo]);

  const handleEditIconClick = (key, value) => {
    setEditData({ ...editData, [key]: value });
  };

  const handleChangeNewUserData = (event, key) => {
    if (key === PROVINCE_SELECTED) {
      setNewUserData({
        ...newUserData,
        [key]: event.target.value,
        university: undefined,
      });
    } else {
      setNewUserData({ ...newUserData, [key]: event.target.value });
    }

    // Clean message error
    setErrorMessages({
      ...errorMessages,
      [key]: "",
    });
  };

  const getEmailErrorMessage = () => {
    let regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/i;

    if (newUserData[EMAIL] === "") {
      return ERROR_EMPTY_FIELDS;
    } else if (!regex.test(newUserData[EMAIL])) {
      return INVALID_EMAIL_FORMAT;
    }
    return "";
  };

  const getPasswordErrorMessage = (key) => {
    if (!newUserData[`${key}`]) {
      return ERROR_EMPTY_FIELDS;
    } else if (newUserData[`${key}`].length <= 7) {
      return INVALID_PASSWORD_FORMAT;
    }

    return "";
  };

  const getNewPasswordErrorMessage = (key) => {
    const errorMessage = getPasswordErrorMessage(key);
    if (errorMessage) {
      return errorMessage;
    } else if (
      newUserData[NEW_PASSWORD] !== newUserData[NEW_PASSWORD_DUPLICATED]
    ) {
      return PASSWORDS_NOT_THE_SAME;
    }

    return "";
  };

  const handleApplyChange = (key) => {
    let hasErrors = false;
    const newErrorMessages = {
      email: getEmailErrorMessage(),
    };

    for (const fieldName in newUserData) {
      if (
        fieldName !== "id" &&
        fieldName !== EMAIL &&
        newUserData[UNIVERSITY] &&
        !newUserData[fieldName]
      ) {
        newErrorMessages[fieldName] = ERROR_EMPTY_FIELDS;
        hasErrors = true;
      }
    }

    if (!newUserData[UNIVERSITY]) {
      newErrorMessages[UNIVERSITY] = ERROR_EMPTY_FIELDS;
    }

    setErrorMessages(newErrorMessages);

    if (
      !hasErrors &&
      !newErrorMessages.email
    ) {
      updateTeacher(newUserData);
      handleEditIconClick(key, false);
    }
  };

  const handleChangePassword = () => {
    let hasErrors = false;
    const newErrorMessages = {
      password: getPasswordErrorMessage(PASSWORD),
      newPassword: getNewPasswordErrorMessage(NEW_PASSWORD),
      newPasswordDuplicated: getNewPasswordErrorMessage(
        NEW_PASSWORD_DUPLICATED
      ),
    };

    setErrorMessages(newErrorMessages);

    if (
      !hasErrors &&
      (!editData[`${PASSWORD}`] || (!newErrorMessages.password &&
      !newErrorMessages.newPassword &&
      !newErrorMessages.newPasswordDuplicated))
    ) {
      updatePassword({
        currentPassword: newUserData[PASSWORD],
        newPassword: newUserData[NEW_PASSWORD]
    });
      handleEditIconClick(PASSWORD, false);
    }
  }

  const handleCancelChange = (key) => {
    setNewUserData(teacherInfo);
    handleEditIconClick(key, false);

    // Clean message error
    setErrorMessages({
      ...errorMessages,
      [key]: "",
    });
  };

  const handleEndAdornment = (key) => {
    return !editData[`${key}`] ? (
      <InputAdornment position="end">
        <IconButton
          aria-label="edit field"
          onClick={() => handleEditIconClick(key, true)}
          edge="end"
        >
          <EditIcon color="green" />
        </IconButton>
      </InputAdornment>
    ) : (
      <InputAdornment position="end">
        <IconButton
          aria-label="save changes"
          onClick={() => handleApplyChange(key)}
          edge="end"
        >
          <CheckIcon color="green" />
        </IconButton>
        <IconButton
          aria-label="close edit option"
          onClick={() => handleCancelChange(key)}
          edge="end"
        >
          <CloseIcon color="green" />
        </IconButton>
      </InputAdornment>
    );
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar({ open: false });
  };


  return (
    <div className="accountData">
      <div className="accountData-left-body-container">
        <div className="accountData-profile-container">
          <div className="accountData-avatar-container">
            <Avatar
              alt="Remy Sharp"
              src="../../../assets/images/Background.jpeg"
              sx={{ width: 100, height: 100 }}
            />
          </div>
          <Typography variant="h5" color="secondary">
            Mi perfil
          </Typography>
        </div>
        <div className="accountData-login-container">
          <div className="accountData-text-field-container">
            <TextField
              id={EMAIL}
              value={newUserData.email}
              label="Correo electrónico"
              placeholder="aaaa@gmail.com"
              color="secondary"
              focused
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon color="secondary" />
                  </InputAdornment>
                ),
                className: "login-text-field",
                endAdornment: handleEndAdornment(EMAIL),
                readOnly: editData.email ? false : true,
              }}
              style={{ marginTop: 11 }}
              onChange={(event) => handleChangeNewUserData(event, EMAIL)}
              error={!!errorMessages.email}
              helperText={errorMessages.email}
            />
          </div>
          <div className="accountData-text-field-container">
            <TextField
              id={PASSWORD}
              label={
                editData[`${PASSWORD}`] ? "Contraseña anterior" : "Contraseña"
              }
              placeholder="********"
              color="secondary"
              type={PASSWORD}
              focused
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon color="secondary" />
                  </InputAdornment>
                ),
                className: "login-text-field",
                endAdornment: !editData[`${PASSWORD}`] && (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="edit field"
                      onClick={() => handleEditIconClick(PASSWORD, true)}
                      edge="end"
                    >
                      <EditIcon color="green" />
                    </IconButton>
                  </InputAdornment>
                ),
                readOnly: editData.password ? false : true,
              }}
              style={{ marginTop: 11 }}
              onChange={(event) => handleChangeNewUserData(event, PASSWORD)}
              error={!!errorMessages.password}
              helperText={errorMessages.password}
            />
          </div>
          {editData[`${PASSWORD}`] && (
            <>
              <div className="accountData-text-field-container">
                <TextField
                  id={NEW_PASSWORD}
                  value={newUserData[NEW_PASSWORD]}
                  label="Nueva contraseña"
                  placeholder="********"
                  color="secondary"
                  type={PASSWORD}
                  focused
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon color="secondary" />
                      </InputAdornment>
                    ),
                    className: "login-text-field",
                  }}
                  style={{ marginTop: 11 }}
                  onChange={(event) =>
                    handleChangeNewUserData(event, NEW_PASSWORD)
                  }
                  error={!!errorMessages.newPassword}
                  helperText={errorMessages.newPassword}
                />
              </div>
              <div className="accountData-text-field-container">
                <TextField
                  id={NEW_PASSWORD_DUPLICATED}
                  value={newUserData.newPasswordDuplicated}
                  label="Repite nueva contraseña"
                  placeholder="********"
                  color="secondary"
                  type={PASSWORD}
                  focused
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon color="secondary" />
                      </InputAdornment>
                    ),
                    className: "login-text-field",
                    endAdornment: editData[`${PASSWORD}`] && (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="save changes"
                          onClick={() => handleChangePassword()}
                          edge="end"
                        >
                          <CheckIcon color="green" />
                        </IconButton>
                        <IconButton
                          aria-label="close edit option"
                          onClick={() => handleCancelChange(PASSWORD)}
                          edge="end"
                        >
                          <CloseIcon color="green" />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  style={{ marginTop: 11 }}
                  onChange={(event) =>
                    handleChangeNewUserData(event, NEW_PASSWORD_DUPLICATED)
                  }
                  error={!!errorMessages.newPasswordDuplicated}
                  helperText={errorMessages.newPasswordDuplicated}
                />
              </div>
            </>
          )}
        </div>
        <Button
          variant="contained"
          className="sign-off-button"
          color="secondary"
          onClick={() => {
            deleteCookie(TOKEN);
            window.location.href = "http://localhost:3000/login";
          }}
        >
          Cerrar sesión
        </Button>
      </div>
      <div className="accountData-container">
        <div className="accountData-header-container">
          <div className="accountData-button-back-container">
            <Button
              className="back-button"
              startIcon={<ArrowBackIcon />}
              onClick={() =>
                (window.location.href = "http://localhost:3000/courses")
              }
            >
              Volver atrás
            </Button>
          </div>
          <div>
            <Typography variant="title" color="secondary">
              Mi cuenta
            </Typography>
          </div>
        </div>
        <div className="accountData-body-container">
          <div className="body-title-container">
            <Typography variant="h5" color="primary">
              Mis datos
            </Typography>
          </div>
          <div className="accountData-form-container">
            <div className="accountData-item-container">
              <TextField
                id={NAME}
                value={newUserData.name}
                label="Nombre"
                color="primary"
                focused
                InputProps={{
                  className: "text-field",
                  endAdornment: handleEndAdornment(NAME),
                  readOnly: editData.name ? false : true,
                }}
                style={{ marginTop: 11 }}
                fullWidth
                onChange={(event) => handleChangeNewUserData(event, NAME)}
                error={!!errorMessages.name}
                helperText={errorMessages.name}
              />
            </div>
            <div className="accountData-item-container">
              <TextField
                id={LAST_NAME}
                value={newUserData.lastName}
                label="Apellido"
                color="primary"
                focused
                InputProps={{
                  className: "text-field",
                  endAdornment: handleEndAdornment(LAST_NAME),
                  readOnly: editData.lastName ? false : true,
                }}
                style={{ marginTop: 11 }}
                fullWidth
                onChange={(event) => handleChangeNewUserData(event, LAST_NAME)}
                error={!!errorMessages.lastName}
                helperText={errorMessages.lastName}
              />
            </div>
            <div className="accountData-item-container">
              <TextField
                id={BIRTHDATE}
                value={newUserData.dateOfBirth}
                label="Fecha de nacimiento"
                color="primary"
                type="date"
                focused
                InputProps={{
                  className: "text-field",
                  endAdornment: handleEndAdornment(BIRTHDATE),
                  readOnly: editData.dateOfBirth ? false : true,
                }}
                style={{ marginTop: 11 }}
                fullWidth
                onChange={(event) => handleChangeNewUserData(event, BIRTHDATE)}
                error={!!errorMessages.dateOfBirth}
                helperText={errorMessages.dateOfBirth}
              />
            </div>
            <div className="accountData-item-container">
              <TextField
                id={DNI}
                value={newUserData.dni}
                label="DNI"
                color="primary"
                type="number"
                focused
                InputProps={{
                  className: "text-field",
                  readOnly: true,
                }}
                style={{ marginTop: 11 }}
                fullWidth
              />
            </div>
            <div className="accountData-item-container-form-control">
              {newUserData.provinceSelected && (
                <FormControl
                  color="primary"
                  focused
                  fullWidth
                  error={!!errorMessages.provinceSelected}
                >
                  <InputLabel>Seleccionar provincia</InputLabel>
                  <Select
                    id={PROVINCE_SELECTED}
                    label="Seleccionar provincia"
                    color="primary"
                    onChange={(event) =>
                      handleChangeNewUserData(event, PROVINCE_SELECTED)
                    }
                    value={newUserData.provinceSelected}
                    disabled={editData.provinceSelected ? false : true}
                    endAdornment={handleEndAdornment(PROVINCE_SELECTED)}
                    classes={{
                      root: "option-select",
                    }}
                  >
                    {provinces.map(({ id, name }) => (
                      <MenuItem
                        key={id}
                        value={id}
                        classes={{
                          root: "menu-options",
                        }}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            </div>
            <div className="accountData-item-container-form-control">
              {newUserData.provinceSelected && (
                <FormControl
                  color="primary"
                  focused
                  fullWidth
                  error={!!errorMessages.city}
                >
                  <InputLabel>Seleccionar ciudad</InputLabel>
                  <Select
                    id={CITY}
                    label="Seleccionar ciudad"
                    color="primary"
                    onChange={(event) => handleChangeNewUserData(event, CITY)}
                    value={newUserData.city}
                    endAdornment={handleEndAdornment(CITY)}
                    classes={{
                      root: "option-select",
                    }}
                  >
                    {cities.map(({ id, name }) => (
                      <MenuItem
                        key={id}
                        value={id}
                        classes={{
                          root: "menu-options",
                        }}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            </div>
            <div className="accountData-item-container">
              <TextField
                id={DOMICILE}
                value={newUserData.address}
                label="Domicilio"
                color="primary"
                focused
                InputProps={{
                  className: "text-field",
                  endAdornment: handleEndAdornment(DOMICILE),
                  readOnly: editData.address ? false : true,
                }}
                style={{ marginTop: 11 }}
                fullWidth
                onChange={(event) => handleChangeNewUserData(event, DOMICILE)}
                error={!!errorMessages.address}
                helperText={errorMessages.address}
              />
            </div>
            <div className="accountData-item-container">
              <TextField
                id={REGISTRATION_NUMBER}
                value={newUserData.enrollmentNumber}
                label="Número de matrícula"
                color="primary"
                type="number"
                focused
                InputProps={{
                  className: "text-field",
                  readOnly: true,
                }}
                style={{ marginTop: 11 }}
                fullWidth
              />
            </div>
          </div>
          <div className="accountData-uni-container">
            <TextField
              id={UNIVERSITY}
              value="Universidad Tecnológica Nacional - FRSF"
              label="Universidad"
              color="primary"
              focused
              InputProps={{
                className: "text-field",
                readOnly: true,
              }}
              style={{ marginTop: 11 }}
              fullWidth
            />
          </div>
        </div>
      </div>
      <div className="snackbar-container">
        <Snackbar
          {...snackbar}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
        />
      </div>
    </div>
  );
};

export default AccountData;
