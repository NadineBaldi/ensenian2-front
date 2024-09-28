import React, { useState, useEffect } from "react";

// Material UI Components
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import IconButton from "@mui/material/IconButton";

// Icons
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

// Components
import DeleteQuestionModal from "../deleteQuestionModal/DeleteQuestionModal";
import ManageSingleQuestionModal from "../manageSingleQuestionModal/manageSingleQuestionModal";
import CreateBulkQuestionModal from "../createBulkQuestionModal/createBulkQuestionModal";

const QuestionsView = ({ createQuestion, editQuestion, questions, getQuestions }) => {
  const [openDeleteQuestionModal, setOpenDeleteQuestionModal] = useState(false);
  const [openManageSingleQuestionModal, setOpenManageSingleQuestionModal] =
    useState(false);
  const [openCreateBulkQuestionModal, setOpenCreateBulkQuestionModal] =
    useState(false);
  const [questionSelected, setQuestionSelected] = useState(null);

  const handleOnClickEditQuestion = (question) => {
    setQuestionSelected(question);
    setOpenManageSingleQuestionModal(true);
  };

  useEffect(() => {
    getQuestions();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="questions-view">
      <div className="questions-view__header">
        <div className="questions-view__button-container">
          <Button
            variant="contained"
            className="questions-view__add-individual-question-btn"
            size="small"
            onClick={() => setOpenManageSingleQuestionModal(true)}
          >
            Crear pregunta individual
          </Button>
        </div>
        <div className="questions-view__button-container">
          <Button
            variant="contained"
            className="questions-view__add-questions-btn"
            size="small"
            onClick={() => setOpenCreateBulkQuestionModal(true)}
          >
            Carga masiva de preguntas
          </Button>
        </div>
      </div>
      <div className="questions-view__body">
        {questions.map(({ id, question, ...other }) => (
          <div className="questions-view__accordion">
            <Accordion>
              <AccordionSummary id={id}>
                <div className="accordion-summary-container">
                  <strong>{question}</strong>
                  <div className="edit-icon"></div>
                  <div role="button" className="questions-view__icon-container">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() =>
                        handleOnClickEditQuestion({ id, question, ...other })
                      }
                      edge="end"
                    >
                      <EditIcon color="primary" />
                    </IconButton>
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setOpenDeleteQuestionModal(true)}
                      edge="end"
                    >
                      <DeleteForeverIcon color="primary" />
                    </IconButton>
                  </div>
                </div>
              </AccordionSummary>
            </Accordion>
          </div>
        ))}
      </div>
      <DeleteQuestionModal
        openModal={openDeleteQuestionModal}
        setOpenModal={setOpenDeleteQuestionModal}
      />
      <ManageSingleQuestionModal
        openModal={openManageSingleQuestionModal}
        onClose={() => {
          setQuestionSelected(null);
          setOpenManageSingleQuestionModal(false);
        }}
        questionSelected={questionSelected}
        createQuestion={createQuestion}
        editQuestion={editQuestion}
      />
      <CreateBulkQuestionModal
        openModal={openCreateBulkQuestionModal}
        setOpenModal={setOpenCreateBulkQuestionModal}
      />
    </div>
  );
};

export default QuestionsView;
