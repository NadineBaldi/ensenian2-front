import React, { useState } from "react";

// Material UI Components
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

// Icons
import CloseIcon from "@mui/icons-material/Close";
import {
  EMPTY_FIELD,
  REGISTRATION_NUMBER_LENGTH,
} from "../../../../constants/util";

const AddStudentModal = (props) => {
  const { openModal, setOpenModal } = props;

  const [registrationNumbers, setRegistrationNumbers] = useState([]);
  const [registrationNumberValue, setRegistrationNumberValue] = useState("");
  const [registrationNumberError, setRegistrationNumberError] = useState("");

  const handleInputChange = (e) => {
    setRegistrationNumberValue(e.target.value);
  };

  const handleAddStudentClick = () => {
    let hasErrors = false;
    if (registrationNumberValue === "") {
      setRegistrationNumberError(EMPTY_FIELD);
      hasErrors = true;
    } else if (registrationNumberValue.length > 5) {
      setRegistrationNumberError(REGISTRATION_NUMBER_LENGTH);
      hasErrors = true;
    }

    if (!hasErrors) {
      setRegistrationNumbers([...registrationNumbers, registrationNumberValue]);
      setRegistrationNumberValue("");
    }
  };

  const handleSaveStudentsClick = () => {
    // LLAMAR BACKEND PARA GUARDAR ESTUDIANTES
    setOpenModal(false);
  };

  const handleDeleteClick = (index) => {
    const newRegistrationsNumbers = [...registrationNumbers];
    newRegistrationsNumbers.splice(index, 1);
    setRegistrationNumbers(newRegistrationsNumbers);
  };

  const handleErrorMessages = (errorType) => {
    if (errorType === EMPTY_FIELD) {
      return "El campo no puede quedar vacío";
    }
    if (errorType === REGISTRATION_NUMBER_LENGTH) {
      return REGISTRATION_NUMBER_LENGTH;
    }
    return "";
  };

  const handleOnClose = () => {
    setRegistrationNumberValue("");
    setRegistrationNumberError("");
    setOpenModal(false);
  };

  return (
    <div className="addStudentModal">
      <Modal open={openModal} onClose={handleOnClose}>
        <div className="addStudentModal__box-container">
          <div className="addStudentModal__close-btn-container">
            <IconButton onClick={() => setOpenModal(false)} aria-label="close">
              <CloseIcon />
            </IconButton>
          </div>
          <div className="addStudentModal__title-container">
            <Typography variant="h6" color="primary">
              <strong>Agregar estudiantes al curso</strong>
            </Typography>
          </div>
          <div>
            <DialogContent>
              <TextField
                label="Ingrese el número de legajo"
                variant="outlined"
                type="number"
                value={registrationNumberValue}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                error={registrationNumberError !== "" ? true : false}
                helperText={handleErrorMessages(registrationNumberError)}
                onBlur={() =>
                  registrationNumberError !== ""
                    ? setRegistrationNumberError("")
                    : null
                }
              />
              <div className="addStudentModal__registration-number-container">
                {registrationNumbers.map((registrationNumber, index) => (
                  <div key={index} className="addStudentModal__pill">
                    <span>{registrationNumber}</span>
                    <IconButton
                      onClick={() => handleDeleteClick(index)}
                      aria-label="delete"
                      size="small"
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </div>
                ))}
              </div>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleAddStudentClick}
                color="primary"
                variant="contained"
                className="addStudentModal__button"
              >
                Agregar
              </Button>
              <Button
                onClick={handleSaveStudentsClick}
                color="primary"
                variant="outlined"
                className="addStudentModal__button"
              >
                Guardar
              </Button>
            </DialogActions>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddStudentModal;
