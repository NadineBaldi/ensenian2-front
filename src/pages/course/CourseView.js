import React, { useState, useEffect } from "react";

// Material UI Components
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Tab, Tabs } from "@mui/material";

// Components
import ConfigView from "./components/configuration/ConfigurationView";
import ExamsView from "./components/exams/ExamsView";
import QuestionsView from "./components/questions/QuestionsView";
import UnitsView from "./components/units/UnitsView";

// Hooks
import useFetchSubjects from '../mainCourses/hooks/hooks';
import useFetchCommon from "../../commons/hooks/hooks";

import { setCookie, getCookie } from "../../commons/helpers/cookies";
import { getQueryVariable } from "../../commons/helpers/url-query";
import { SELECTED_TAB } from "../../constants/util";

const CourseView = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openOptions = Boolean(anchorEl);
  const [currentTabIndex, setCurrentTabIndex] = useState(Number(getCookie(SELECTED_TAB)) || 0);
  const [courseInfo, setCourseInfo] = useState({});
  const [units, setUnits] = useState([]);

  // Hooks
  const { 
    getSubjectsByTeacherId, 
    subjects,
    editSubjectStatus,
    showSuccessEditStatusMessage,
    setShowSuccessEditStatusMessage,
    editSubjectName,
    showSuccessEditNameMessage,
    setShowSuccessEditNameMessage,
    editSubjectDescription,
    showSuccessEditDescriptionMessage,
    setShowSuccessEditDescriptionMessage
  } = useFetchSubjects();
  const { loadTeacherInfo, teacherInfo } = useFetchCommon();

  useEffect(() => {
    getSubjectsByTeacherId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    loadTeacherInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const unidadesAReemplazar = [
    {
      id: 11,
      name: "Unidad 1: MRU",
      questions: [
        "Título pregunta 1",
        "Título pregunta 2",
        "Título pregunta 3",
      ],
    },
    {
      id: 12,
      name: "Unidad 2: MRUA",
      questions: [
        "Título pregunta 1",
        "Título pregunta 2",
        "Título pregunta 3",
      ],
    },
    {
      id: 13,
      name: "Unidad 3: Óptica",
      questions: [
        "Título pregunta 1",
        "Título pregunta 2",
        "Título pregunta 3",
        "Título pregunta 4",
        "Título pregunta 5",
      ],
    },
    {
      id: 14,
      name: "Unidad 4: Leyes de Newton",
      questions: ["Título pregunta 1", "Título pregunta 2"],
    },
  ];

  useEffect(() => {
    const courseId = getQueryVariable("courseId");
    if (courseId !== null) {
      const course = subjects?.find(
        (course) => course.id.toString() === courseId
      );
      if (course) {
        const { units, ...other } = course; 
        setCourseInfo({
          ...other,
        });
        setUnits(unidadesAReemplazar); //cambiar por las del back cuando esten
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subjects]);

  const handleManageAccount = () => {
    setAnchorEl(null);
    window.open("http://localhost:3000/accountData", "_self");
  };

  const handleTabChange = (e, tabIndex) => {
    setCookie(SELECTED_TAB, tabIndex);
    setCurrentTabIndex(tabIndex);
  };

  return (
    <div className="course">
      <div className="course-container">
        <div className="header-container">
          <div className="user-info-container">
            <div
              className="account-data-container"
              onClick={(event) => setAnchorEl(event.currentTarget)}
            >
              <div className="avatar-container">
                <Avatar
                  alt="Remy Sharp"
                  src="../../../assets/images/Background.jpeg"
                  sx={{ width: 30, height: 30 }}
                />
              </div>
              <Typography variant="subtitle" color="secondary">
                {teacherInfo && teacherInfo.name && teacherInfo.lastName
                ? `${teacherInfo.name} ${teacherInfo.lastName}`
                : "Usuario"}
              </Typography>
            </div>
            <Menu
              id="edit-data-menu"
              anchorEl={anchorEl}
              open={openOptions}
              onClose={() => setAnchorEl(null)}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleManageAccount}>
                Gestionar cuenta
              </MenuItem>
              <MenuItem>Cerrar sesión</MenuItem>
            </Menu>
          </div>
        </div>
        <div className="body-container">
          <div className="title-container">
            <Typography variant="title" color="primary">
              {courseInfo.name}
            </Typography>
          </div>
          <div className="tabs-container">
            <Tabs value={currentTabIndex} onChange={handleTabChange}>
              <Tab label="Unidades" />
              <Tab label="Preguntas" />
              <Tab label="Exámenes" />
              <Tab label="Configuraciones" />
            </Tabs>
          </div>
          <div>{currentTabIndex === 0 && <UnitsView units={units} />}</div>
          <div>{currentTabIndex === 1 && <QuestionsView />}</div>
          <div>{currentTabIndex === 2 && <ExamsView />}</div>
          <div>
            {currentTabIndex === 3 &&
              <ConfigView 
                courseInfo={courseInfo}
                editSubjectStatus={editSubjectStatus}
                showSuccessEditStatusMessage={showSuccessEditStatusMessage}
                setShowSuccessEditStatusMessage={setShowSuccessEditStatusMessage}
                editSubjectName={editSubjectName}
                showSuccessEditNameMessage={showSuccessEditNameMessage}
                setShowSuccessEditNameMessage={setShowSuccessEditNameMessage}
                editSubjectDescription={editSubjectDescription}
                showSuccessEditDescriptionMessage={showSuccessEditDescriptionMessage}
                setShowSuccessEditDescriptionMessage={setShowSuccessEditDescriptionMessage}
              />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseView;
