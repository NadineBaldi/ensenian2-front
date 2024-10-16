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
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

// Components
import DeleteQuestionModal from "../deleteQuestionModal/DeleteQuestionModal";
import ManageUnitModal from "../manageUnitModal/ManageUnitModal";
import DeleteUnitModal from "../deleteUnitModal/DeleteUnitModal";

const UnitsView = (props) => {
  const { 
    units = [], 
    saveNewUnit, 
    deleteUnit, 
    updateUnitDetails,  
    getUnitData,
    unitData,
    questions,
  } = props;

  const [unitIdSelected, setUnitIdSelected] = useState(null);
  const [openDeleteQuestionModal, setOpenDeleteQuestionModal] = useState(false);
  const [openManageUnitModal, setOpenManageUnitModal] = useState(false);
  const [openDeleteUnitModal, setOpenDeleteUnitModal] = useState(false);

  const [openAccordion, setOpenAccordion] = useState({});

  const handleOpenAccordion = (key, unitId) => {
    if (key) {
      setOpenAccordion({
        ...openAccordion,
        [key]: !Boolean(openAccordion[key]),
      });
    } else {
      setUnitIdSelected(unitId);
      setOpenManageUnitModal(true);
    }
  };

  const onCloseDeleteModal = () => {
    setOpenDeleteUnitModal(false);  
    setUnitIdSelected(null);
  }

  const handleDeleteUnit = () => {
    deleteUnit(unitIdSelected); 
    onCloseDeleteModal();
  }

  return (
    <div className="units-view">
      <div className="units-view__header">
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          className="units-view__add-unit-btn"
          size="small"
          onClick={() => setOpenManageUnitModal(true)}
        >
          Agregar unidad
        </Button>
      </div>
      <div className="units-view__body">
        {units.map(({ id, name, questionsList }) => (
          <div className="units_view__accordion">
            <Accordion expanded={!!openAccordion[String(id)]}>
              <AccordionSummary id={id}>
                <div className="accordion-summary-container">
                  <strong>{name}</strong>
                  <div
                    className="edit-icon"
                    onClick={() =>
                      handleOpenAccordion(null, id)
                    }
                  >
                    <EditIcon fontSize="small" />
                  </div>
                  <div
                    className="delete-icon"
                    onClick={() =>{
                      setUnitIdSelected(id);
                      setOpenDeleteUnitModal(true);
                    }
                    }
                  >
                    <DeleteForeverIcon fontSize="small" />
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
                  {questionsList
                    ? questionsList.map((item) => (
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
      <DeleteUnitModal
        openModal={openDeleteUnitModal}
        onClose={onCloseDeleteModal}
        deleteUnit={handleDeleteUnit}
      />
      <ManageUnitModal
        openModal={openManageUnitModal}
        onClose={() => { 
          setOpenManageUnitModal(false); 
          setUnitIdSelected(null)
        }}
        unitIdSelected={unitIdSelected}
        saveNewUnit={saveNewUnit}
        updateUnitDetails={updateUnitDetails}
        getUnitData={getUnitData}
        unitData={unitData}
        questions={questions}
      />
    </div>
  );
};

export default UnitsView;
