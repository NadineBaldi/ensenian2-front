import React, { useState } from "react";

// Material UI Components
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Icons
import AddIcon from "@mui/icons-material/Add";

// Components
import CourseCard from "./components/courseCard/CourseCard";
import AddCourseModal from "./components/addCourseModal/AddCourseModal";

// Constants
import { courses } from "../../constants/courses";

const MainCourses = () => {
  // useState
  const [openAddCourseModal, setOpenAddCourseModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openOptions = Boolean(anchorEl);

  const handleManageAccount = () => {
    setAnchorEl(null);
    window.open("http://localhost:3000/accountData", "_self");
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
                Nombre de usuario
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
            {courses.map(({ name, status, id }) => (
              <div className="course-card-container">
                <CourseCard
                  courseId={id}
                  courseName={name}
                  courseStatus={status}
                  courses={courses}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <AddCourseModal
        openAddCourseModal={openAddCourseModal}
        setOpenAddCourseModal={setOpenAddCourseModal}
      />
    </div>
  );
};

export default MainCourses;
