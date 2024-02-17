import React, { useState } from "react";

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
import EditQuestionModal from "../editQuestionModal/EditQuestionModal";

// Constants
import { questions } from "../../../../constants/questions";

const QuestionsView = () => {
  const [openDeleteQuestionModal, setOpenDeleteQuestionModal] = useState(false);
  const [openEditQuestionModal, setOpenEditQuestionModal] = useState(false);
  const [questionSelected, setQuestionSelected] = useState({});

  const handleOnClickEditQuestion = (question) => {
    setQuestionSelected(question);
    setOpenEditQuestionModal(true);
  };

  return (
    <div className="questions-view">
      <div className="questions-view__header">
        <div className="questions-view__button-container">
          <Button
            variant="contained"
            className="questions-view__add-individual-question-btn"
            size="small"
          >
            Crear pregunta individual
          </Button>
        </div>
        <div className="questions-view__button-container">
          <Button
            variant="contained"
            className="questions-view__add-questions-btn"
            size="small"
          >
            Carga masiva de preguntas
          </Button>
        </div>
      </div>
      <div className="questions-view__body">
        {questions.map(({ id, title, ...other }) => (
          <div className="questions-view__accordion">
            <Accordion>
              <AccordionSummary id={id}>
                <div className="accordion-summary-container">
                  <strong>{title}</strong>
                  <div className="edit-icon"></div>
                  <div role="button" className="questions-view__icon-container">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() =>
                        handleOnClickEditQuestion({ id, title, ...other })
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
      <EditQuestionModal
        openModal={openEditQuestionModal}
        setOpenModal={setOpenEditQuestionModal}
        questions={questions}
        questionSelected={questionSelected}
      />
    </div>
  );
};

export default QuestionsView;
