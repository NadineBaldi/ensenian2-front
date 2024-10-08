import React from "react";

// Material UI Components
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

// Icons
import CloseIcon from "@mui/icons-material/Close";

const DeleteExamModal = (props) => {
  const { openModal, onClose, onConfirm } = props;

  return (
    <div className="delete-exam-modal">
      <Modal open={openModal} onClose={onClose}>
        <div className="delete-exam-modal__box-container">
          <div className="delete-exam-modal__close-btn-container">
            <IconButton onClick={onClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </div>
          <div className="delete-exam-modal__title-container">
            <Typography variant="title" color="primary">
              <strong>Cuidado!</strong>
            </Typography>
            <Typography variant="subtitle">
              Estás por eliminar un exámen.
            </Typography>
            <div className="delete-exam-modal__question-text-container">
              <Typography variant="subtitle">¿Deseas continuar?</Typography>
            </div>
          </div>
          <div className="delete-exam-modal__course-button-container">
            <Button
              className="delete-exam-modal__button"
              variant="contained"
              size="small"
              onClick={onConfirm}
            >
              Continuar
            </Button>
            <Button
              className="delete-exam-modal__button"
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

export default DeleteExamModal;
