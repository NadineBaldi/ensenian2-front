import React, { useState } from "react";

// Material UI Components
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

// Icons
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

// Components
import DeleteExamModal from "../deleteExamModal/DeleteExamModal";
import EditExamModal from "../editExamModal/EditExamModal";
import CreateNewExamModal from "../createNewExamModal/createNewExamModal";

// Constants
import { exams } from "../../../../constants/exams";

const ExamsView = () => {
  const [openCreateNewExamModal, setOpenCreateNewExamModal] = useState(false);
  const [openDeleteExamModal, setOpenDeleteExamModal] = useState(false);
  const [openEditExamModal, setOpenEditExamModal] = useState(false);
  const [examSelected, setExamSelected] = useState(false);

  const handleTitle = (timeLimit, questions) => {
    return (
      <Typography variant="subtitle" classes={{ root: "title-text" }}>
        {timeLimit !== null
          ? `${timeLimit} MINUTOS DISPONIBLES. ${questions.length} PREGUNTAS.`
          : `SIN LÍMITE DE TIEMPO. ${questions.length} PREGUNTAS.`}
      </Typography>
    );
  };

  const handleOnClickEditExam = (exam) => {
    setExamSelected(exam);
    setOpenEditExamModal(true);
  };

  return (
    <div className="exams-view">
      <div className="exams-view__header">
        <Button
          startIcon={<AddIcon />}
          variant="contained"
          className="exams-view__create-exam-btn"
          size="small"
          onClick={() => setOpenCreateNewExamModal(true)}
        >
          Crear exámen
        </Button>
      </div>
      <div className="exams-view__body">
        {exams.map(
          ({
            id,
            description,
            timeLimit,
            questions,
            minimumGrade,
            ...other
          }) => (
            <div className="exams-view__accordion">
              <Accordion>
                <AccordionSummary id={id}>
                  <div className="accordion-summary-container">
                    <div className="accordion-summary-text-container">
                      {handleTitle(timeLimit, questions)}
                      <Typography
                        variant="subtitle"
                        classes={{ root: "description-text" }}
                      >
                        {description}
                      </Typography>
                    </div>
                    <div className="edit-icon"></div>
                    <div role="button" className="exams-view__icon-container">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() =>
                          handleOnClickEditExam({
                            id,
                            description,
                            timeLimit,
                            minimumGrade,
                            questions,
                            ...other,
                          })
                        }
                        edge="end"
                      >
                        <EditIcon color="primary" />
                      </IconButton>
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setOpenDeleteExamModal(true)}
                        edge="end"
                      >
                        <DeleteForeverIcon color="primary" />
                      </IconButton>
                    </div>
                  </div>
                </AccordionSummary>
              </Accordion>
            </div>
          )
        )}
      </div>
      <CreateNewExamModal
        openModal={openCreateNewExamModal}
        setOpenModal={setOpenCreateNewExamModal}
      />
      <DeleteExamModal
        openModal={openDeleteExamModal}
        setOpenModal={setOpenDeleteExamModal}
      />
      <EditExamModal
        openModal={openEditExamModal}
        setOpenModal={setOpenEditExamModal}
        examSelected={examSelected}
      />
    </div>
  );
};

export default ExamsView;
