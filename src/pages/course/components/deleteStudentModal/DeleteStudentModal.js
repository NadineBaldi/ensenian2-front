import React from "react";

// Material UI Components
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

// Icons
import CloseIcon from "@mui/icons-material/Close";

const DeleteStudentModal = (props) => {
  const { openModal, onClose, deleteStudentFromSubject, selectedStudent: { docketNumber } } = props;

  const handleDeleteStudent = () => {
    deleteStudentFromSubject(docketNumber);
    onClose(false);
  };

  return (
    <div className="delete-student-modal">
      <Modal open={openModal} onClose={onClose}>
        <div className="delete-student-modal__box-container">
          <div className="delete-student-modal__close-btn-container">
            <IconButton onClick={onClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </div>
          <div className="delete-student-modal__title-container">
            <Typography variant="title" color="primary">
              <strong>Cuidado!</strong>
            </Typography>
            <Typography variant="subtitle">
              Estás por eliminar un estudiante de la materia.
            </Typography>
            <div className="delete-student-modal__question-text-container">
              <Typography variant="subtitle">¿Deseas continuar?</Typography>
            </div>
          </div>
          <div className="delete-student-modal__course-button-container">
            <Button
              className="delete-student-modal__button"
              variant="contained"
              size="small"
              onClick={() => handleDeleteStudent()}
            >
              Continuar
            </Button>
            <Button
              className="delete-student-modal__button"
              variant="outlined"
              onClick={onClose}
              size="small"
            >
              Cancelar
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteStudentModal;
