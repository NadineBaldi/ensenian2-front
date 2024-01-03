import React from "react";

// Material UI Components
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

// Icons
import AddIcon from "@mui/icons-material/Add";

// Components
import CourseCard from "./components/courseCard/CourseCard";

const MainCourses = () => {
  const courses = [
    { name: "Física I", status: "Pendiente" },
    { name: "Física II", status: "Publicado" },
    { name: "Álgebra", status: "Publicado" },
    { name: "Análisis Matemático I", status: "Archivado" },
  ];

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
              <div className="add-course-button">
                <AddIcon color="secondary" fontSize="large" />
                <Typography variant="subtitle2" color="secondary">
                  Agregar nuevo curso
                </Typography>
              </div>
            </div>
            {courses.map(({ name, status }) => (
              <div className="course-card-container">
                <CourseCard courseName={name} courseStatus={status} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCourses;
