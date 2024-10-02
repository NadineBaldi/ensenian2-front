import React, { useState, useEffect } from "react";

// Material UI Components
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

// Icons
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { getQueryVariable } from '../../../../commons/helpers/url-query'

// Constants
import {
  ERROR_EMPTY_FIELDS,
  NOT_CORRECT_OPTION_SELECTED,
} from "../../../../constants/util";

const CreateSingleQuestionModal = (props) => {
  const { openModal, onClose, questionSelected, createQuestion, editQuestion } = props;

  // variables for textFields values
  const initialState = {
    question: "",
    answers: [
      {
        answer: "",
        correct: false,
      },
      { answer: "", correct: false },
    ],
  };
  const [values, setValues] = useState(initialState);

  useEffect(() => {
    if (questionSelected) {
      setValues({ ...questionSelected });
    } else {
      setValues(initialState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionSelected, openModal]);

  const handleAddOption = () => {
    setValues({
      ...values,
      answers: [...values.answers, { answer: "", correct: false }],
    });
  };

  const handleFieldChange = (event, key) => {
    setValues({
      ...values,
      [key]: event.target.value,
    });
  };

  const handleChangeAnswers = (index, key, newValue) => {
    const answersAux = values.answers;
    const selectedOption = answersAux[index];
    selectedOption[key] = newValue;
    setValues({ ...values, answers: answersAux });
  };

  const handleDeleteOption = (indexToDelete) => {
    const newAnswers = values.answers.filter(
      (option, index) => index !== indexToDelete
    );
    setValues({ ...values, answers: newAnswers });
  };

  const getErrorMessages = () => {
    const errorTitle = values.question === "" ? ERROR_EMPTY_FIELDS : "";
    const error = values.answers.some(({ correct }) => correct)
      ? ""
      : NOT_CORRECT_OPTION_SELECTED;
    const answersWithError = values.answers.map(({ answer, ...other }) => ({
      ...other,
      answer,
      error: answer === "" ? ERROR_EMPTY_FIELDS : "",
    }));

    setValues({
      ...values,
      errorTitle,
      error,
      answers: answersWithError,
    });

    return (
      !!errorTitle || !!error || answersWithError.some(({ error }) => !!error)
    );
  };

  const handleCreateQuestion = () => {
    if (!getErrorMessages()) {
      const subjectId = getQueryVariable("courseId");
      if (questionSelected) {
        editQuestion({
          ...values,
          subjectId,
        });
      } else {
        createQuestion({
          ...values,
          subjectId,
        });
      }
      onClose();
    }
  };

  return (
    <div className="create-single-question-modal">
      <Modal open={openModal} onClose={onClose}>
        <div className="create-single-question-modal__box-container">
          <div className="create-single-question-modal__close-btn-container">
            <IconButton onClick={onClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </div>
          <div className="create-single-question-modal__title-container">
            <Typography variant="h5" color="primary">
              {questionSelected ? "Editar pregunta" : "Crear pregunta"}{" "}
            </Typography>
          </div>
          <div className="create-single-question-modal__text-fields">
            <div className="create-single-question-modal__title-text-field-container">
              <TextField
                id="questionTitle"
                value={values.question}
                label="Título"
                placeholder="Ingrese una pregunta"
                color="primary"
                focused
                InputProps={{
                  className: "title-text-field",
                }}
                style={{ marginTop: 11 }}
                onChange={(event) => handleFieldChange(event, "question")}
                error={!!values.errorTitle}
                helperText={values.errorTitle}
              />
            </div>
            <div className="create-single-question-modal__options-container">
              {values.answers.map(
                (
                  { answer, correct, error: optionError },
                  index
                ) => (
                  <div key={index}>
                    <div className="create-single-question-modal__text-field-container">
                      <TextField
                        id={String(index)}
                        value={answer}
                        label={`Opción ${index + 1}`}
                        placeholder="Ingrese una respuesta"
                        color="primary"
                        focused
                        InputProps={{
                          className: "text-field",
                        }}
                        style={{ marginTop: 11 }}
                        onChange={(event) =>
                          handleChangeAnswers(
                            index,
                            "answer",
                            event.target.value
                          )
                        }
                        error={!!optionError}
                        helperText={optionError}
                      />
                    </div>
                    <div className="create-single-question-modal__footer-container">
                      <div className="create-single-question-modal__checkbox-container">
                        <Checkbox
                          checked={correct}
                          size="small"
                          onChange={(event) =>
                            handleChangeAnswers(
                              index,
                              "correct",
                              event.target.checked
                            )
                          }
                        />
                        <Typography classes={{ root: "text" }}>
                          Respuesta correcta
                        </Typography>
                      </div>
                      {values.answers.length > 2 && (
                        <div
                          className="create-single-question-modal__trash-button"
                          onClick={() => handleDeleteOption(index)}
                        >
                          <DeleteForeverIcon fontSize="small" color="primary" />
                        </div>
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
            <div className="create-single-question-modal__btn-add-option-container">
              <Button
                className="create-single-question-modal__option_button"
                startIcon={<AddIcon />}
                onClick={handleAddOption}
              >
                Agregar respuesta
              </Button>
            </div>
            {values.error !== "" ? (
              <div className="create-single-question-modal__message-error-container">
                <Typography color="error" variant="caption">
                  {values.error}
                </Typography>
              </div>
            ) : null}
            <div className="create-single-question-modal__btn-container">
              <Button
                className="create-single-question-modal__button"
                variant="contained"
                onClick={handleCreateQuestion}
              >
                Guardar pregunta
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CreateSingleQuestionModal;
