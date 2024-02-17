import React, { useEffect, useState } from "react";

// Material UI Components
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

// Icons
import CloseIcon from "@mui/icons-material/Close";

// Constants
import {
  ERROR_EMPTY_FIELDS,
  NOT_CORRECT_OPTION_SELECTED,
} from "../../../../constants/util";

const EditQuestionModal = (props) => {
  const { openModal, setOpenModal, questionSelected } = props;

  const [newQuestionData, setNewQuestionData] = useState({});
  const { title, options = [], errorTitle, error } = newQuestionData;

  useEffect(() => {
    setNewQuestionData({ ...questionSelected });
  }, [questionSelected]);

  const handleChangeNewQuestionData = (event, key) => {
    setNewQuestionData({ ...newQuestionData, [key]: event.target.value });
  };

  const handleChangeOptions = (idOptionSelected, key, newValue) => {
    const optionsAux = options;
    const selectedOption = optionsAux.find(({ id }) => id === idOptionSelected);
    selectedOption[key] = newValue;
    setNewQuestionData({ ...newQuestionData, options: optionsAux });
  };

  const getErrorMessages = () => {
    const errorTitle = title === "" ? ERROR_EMPTY_FIELDS : "";
    const error = options.some(({ correct }) => correct)
      ? ""
      : NOT_CORRECT_OPTION_SELECTED;
    const optionsWithError = options.map(({ title, ...other }) => ({
      ...other,
      title,
      error: title === "" ? ERROR_EMPTY_FIELDS : "",
    }));

    setNewQuestionData({
      ...newQuestionData,
      errorTitle,
      error,
      options: optionsWithError,
    });

    return (
      !!errorTitle || !!error || optionsWithError.some(({ error }) => !!error)
    );
  };

  const handleApplyChanges = () => {
    if (!getErrorMessages()) {
      console.log("Se están guardando (ponele)");
      //TODO aca se llama al back
    }
  };

  return (
    <div className="edit-question-modal">
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div className="edit-question-modal__box-container">
          <div className="edit-question-modal__close-btn-container">
            <IconButton onClick={() => setOpenModal(false)} aria-label="close">
              <CloseIcon />
            </IconButton>
          </div>
          <div className="edit-question-modal__title-container">
            <Typography variant="h5" color="primary">
              <strong>Editar pregunta</strong>
            </Typography>
          </div>
          <div className="edit-question-modal__text-fields">
            <div className="edit-question-modal__title-text-field-container">
              <TextField
                id="questionTitle"
                value={title}
                label="Título"
                color="primary"
                focused
                InputProps={{
                  className: "title-text-field",
                }}
                style={{ marginTop: 11 }}
                onChange={(event) =>
                  handleChangeNewQuestionData(event, "title")
                }
                error={!!errorTitle}
                helperText={errorTitle}
              />
            </div>
            <div className="edit-question-modal__options-container">
              {options.map(
                (
                  {
                    id: optionId,
                    title: optionTitle,
                    correct,
                    error: optionError,
                  },
                  index
                ) => (
                  <div key={optionId}>
                    <div className="edit-question-modal__text-field-container">
                      <TextField
                        id={String(optionId)}
                        value={optionTitle}
                        label={`Opción ${index + 1}`}
                        color="primary"
                        focused
                        InputProps={{
                          className: "text-field",
                        }}
                        style={{ marginTop: 11 }}
                        onChange={(event) =>
                          handleChangeOptions(
                            optionId,
                            "title",
                            event.target.value
                          )
                        }
                        error={!!optionError}
                        helperText={optionError}
                      />
                    </div>
                    <div className="edit-question-modal__checkbox-container">
                      <Checkbox
                        checked={correct}
                        size="small"
                        onChange={(event) =>
                          handleChangeOptions(
                            optionId,
                            "correct",
                            event.target.checked
                          )
                        }
                      />
                      <Typography classes={{ root: "text" }}>
                        Respuesta correcta
                      </Typography>
                    </div>
                  </div>
                )
              )}
            </div>
            {error !== "" ? (
              <div className="edit-question-modal__message-error-container">
                <Typography color="error" variant="caption">
                  {error}
                </Typography>
              </div>
            ) : null}
            <div className="edit-question-modal__btn-container">
              <Button
                className="edit-question-modal__button"
                variant="contained"
                onClick={() => handleApplyChanges()}
              >
                Guardar cambios
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EditQuestionModal;
