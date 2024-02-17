import React from "react";

// Material UI Components
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

// Components
import FileUploader from "./fileUploader";

const CreateBulkQuestionModal = (props) => {
  const { openModal, setOpenModal } = props;

  const handleOnClose = () => {
    setOpenModal(false);
  };

  const handleCreateQuestion = () => {
    console.log("Preguntas agregadas");
    //TODO llamar función backend para guardar nuevas preguntas
  };

  return (
    <div className="create-bulk-question-modal">
      <Modal open={openModal} onClose={handleOnClose}>
        <div className="create-bulk-question-modal__box-container">
          <div className="create-bulk-question-modal__close-btn-container">
            <IconButton onClick={handleOnClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </div>
          <div className="create-bulk-question-modal__title-container">
            <Typography variant="h5" color="primary">
              <strong>Cargar preguntas</strong>
            </Typography>
          </div>
          <FileUploader />
          <div className="create-bulk-question-modal__text-fields">
            <div className="create-bulk-question-modal__btn-container">
              <Button
                className="create-bulk-question-modal__button"
                variant="contained"
                onClick={handleCreateQuestion}
              >
                Guardar preguntas
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CreateBulkQuestionModal;
