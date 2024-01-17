import React, { useState } from "react";

// Material UI Components
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

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

  return (
    <div className="mainCourses">
      <div className="mainCourses-container">
        <div className="header-container">
          <div className="user-info-container">
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
        </div>
        <div className="body-container">
          <div className="title-container">
            <Typography variant="title" color="primary">
              Mis cursos
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
                  Agregar nuevo curso
                </Typography>
              </div>
            </div>
            {courses.map(({ name, status }) => (
              <div className="course-card-container">
                <CourseCard
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
