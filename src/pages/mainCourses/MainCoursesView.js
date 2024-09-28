import React, { useState, useEffect } from "react";

import { setCookie } from "../../commons/helpers/cookies";

// Material UI Components
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Snackbar from '@mui/material/Snackbar';

// Icons
import AddIcon from "@mui/icons-material/Add";

// Components
import CourseCard from "./components/courseCard/CourseCard";
import AddCourseModal from "./components/addCourseModal/AddCourseModal";

// Constants
import { 
  TOKEN, 
  SELECTED_TAB,
} from "../../constants/util";

// Cookies
import { deleteCookie } from '../../commons/helpers/cookies';

// Hooks
import useFetchCommon from "../../commons/hooks/hooks";
import useFetchSubjects from './hooks/hooks';

const MainCourses = () => {
  // useState
  const [openAddCourseModal, setOpenAddCourseModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openOptions = Boolean(anchorEl);

  // Hooks
  const { loadTeacherInfo, teacherInfo } = useFetchCommon();
  const { 
    getSubjectsByTeacherId, 
    subjects, 
    addNewSubject, 
    editSubjectName,
    editSubjectStatus,
    snackbar,
    setSnackbar
  } = useFetchSubjects();

  useEffect(() => {
    getSubjectsByTeacherId();
    setCookie(SELECTED_TAB, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleManageAccount = () => {
    setAnchorEl(null);
    window.open("http://localhost:3000/accountData", "_self");
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar({ open: false });
  };

  return (
    <div className="mainCourses">
      <div className="mainCourses-container">
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
              <MenuItem onClick={() => {
                deleteCookie(TOKEN);
                window.location.href = "http://localhost:3000/login";
              }}>
                Cerrar sesión
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className="body-container">
          <div className="title-container">
            <Typography variant="title" color="primary">
              Mis materias
            </Typography>
          </div>
          <div className="cards-container">
            <div className="add-course-button-container">
              <div
                className="add-course-button"
                onClick={() => setOpenAddCourseModal(true)}
              >
                <AddIcon color="secondary" fontSize="large" />
                <Typography variant="subtitle2" color="secondary">
                  Agregar nueva materia
                </Typography>
              </div>
            </div>
            {subjects?.map(({ name, state, id }) => (
              <div className="course-card-container">
                <CourseCard
                  courseId={id}
                  courseName={name}
                  courseStatus={state}
                  courses={subjects}
                  editSubjectName={editSubjectName}
                  editSubjectStatus={editSubjectStatus}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <AddCourseModal
        openAddCourseModal={openAddCourseModal}
        setOpenAddCourseModal={setOpenAddCourseModal}
        loadTeacherInfo={loadTeacherInfo}
        teacherInfo={teacherInfo}
        addNewSubject={addNewSubject}
      />
        <div className="course-snackbar-container">
          <Snackbar
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
            {...snackbar}
          />
        </div>
    </div>
  );
};

export default MainCourses;
