import React from "react";

// Material UI Components
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

// Icons
import CloseIcon from "@mui/icons-material/Close";

const DeleteQuestionModal = (props) => {
  const { openModal, setOpenModal } = props;

  return (
    <div className="deleteQuestionModal">
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div className="deleteQuestionModal-box-container">
          <div className="deleteQuestionModal-close-btn-container">
            <IconButton onClick={() => setOpenModal(false)} aria-label="close">
              <CloseIcon />
            </IconButton>
          </div>
          <div className="deleteQuestionModal-title-container">
            <Typography variant="title" color="primary">
              <strong>Cuidado!</strong>
            </Typography>
            <Typography variant="subtitle">
              Estás por eliminar una pregunta.
            </Typography>
            <div className="deleteQuestionModal-question-text-container">
              <Typography variant="subtitle">¿Deseas continuar?</Typography>
            </div>
          </div>
          <div className="deleteQuestionModal-course-button-container">
            <Button
              className="deleteQuestionModal-button"
              variant="contained"
              size="small"
            >
              Continuar
            </Button>
            <Button
              className="deleteQuestionModal-button"
              variant="outlined"
              onClick={() => setOpenModal(false)}
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

export default DeleteQuestionModal;
