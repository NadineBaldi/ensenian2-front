import React, { useState } from "react";

// Material UI Components
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

// Icons
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Components
import DeleteQuestionModal from "../deleteQuestionModal/DeleteQuestionModal";
import EditUnitNameModal from "../editUnitNameModal/EditUnitNameModal";
import AddUnitModal from "../addUnitModal/AddUnitModal";

const UnitsView = (props) => {
  const { units } = props;

  const [unitSelected, setUnitSelected] = useState({});
  const [openEditUnitNameModal, setOpenEditUnitNameModal] = useState(false);
  const [openDeleteQuestionModal, setOpenDeleteQuestionModal] = useState(false);
  const [openAddUnitModal, setOpenAddUnitModal] = useState(false);

  const [openAccordion, setOpenAccordion] = useState({});

  const handleOpenAccordion = (key, unit) => {
    if (key) {
      setOpenAccordion({
        ...openAccordion,
        [key]: !Boolean(openAccordion[key]),
      });
    } else {
      setUnitSelected(unit);
      setOpenEditUnitNameModal(true);
    }
  };

  return (
    <div className="units-view">
      <div className="units-view__header">
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          className="units-view__add-unit-btn"
          size="small"
          onClick={() => setOpenAddUnitModal(true)}
        >
          Agregar unidad
        </Button>
      </div>
      <div className="units-view__body">
        {units.map(({ id, name, questions }) => (
          <div className="units_view__accordion">
            <Accordion expanded={!!openAccordion[String(id)]}>
              <AccordionSummary id={id}>
                <div className="accordion-summary-container">
                  <strong>{name}</strong>
                  <div
                    className="edit-icon"
                    onClick={() =>
                      handleOpenAccordion(null, { id, name, questions })
                    }
                  >
                    <EditIcon fontSize="small" />
                  </div>
                  <div
                    onClick={() => handleOpenAccordion(String(id))}
                    role="button"
                    className="expand-icon-container"
                  >
                    <ExpandMoreIcon />
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  {questions
                    ? questions.map((item) => (
                        <ListItem>
                          <ListItemText primary={item} />
                          <Button
                            onClick={() => setOpenDeleteQuestionModal(true)}
                          >
                            <CloseIcon />
                          </Button>
                        </ListItem>
                      ))
                    : null}
                </List>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </div>
      <DeleteQuestionModal
        openModal={openDeleteQuestionModal}
        setOpenModal={setOpenDeleteQuestionModal}
      />
      <EditUnitNameModal
        openModal={openEditUnitNameModal}
        setOpenModal={setOpenEditUnitNameModal}
        units={units}
        unitSelected={unitSelected}
      />
      <AddUnitModal
        openModal={openAddUnitModal}
        setOpenModal={setOpenAddUnitModal}
      />
    </div>
  );
};

export default UnitsView;
