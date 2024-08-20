import React from "react";

// Material UI Components
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

// Icons
import CloseIcon from "@mui/icons-material/Close";

const DeleteUnitModal = (props) => {
  const { openModal, onClose } = props;

  return (
    <div className="delete-unit-modal">
      <Modal open={openModal} onClose={onClose}>
        <div className="delete-unit-modal__box-container">
          <div className="delete-unit-modal__close-btn-container">
            <IconButton onClick={onClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </div>
          <div className="delete-unit-modal__title-container">
            <Typography variant="title" color="primary">
              <strong>Cuidado!</strong>
            </Typography>
            <Typography variant="subtitle">
              Estás por eliminar una unidad.
            </Typography>
            <div className="delete-unit-modal__question-text-container">
              <Typography variant="subtitle">¿Deseas continuar?</Typography>
            </div>
          </div>
          <div className="delete-unit-modal__course-button-container">
            <Button
              className="delete-unit-modal__button"
              variant="contained"
              size="small"
            >
              Continuar
            </Button>
            <Button
              className="delete-unit-modal__button"
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

export default DeleteUnitModal;
