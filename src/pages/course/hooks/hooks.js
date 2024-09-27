import { useState, useEffect } from "react";

// Api
import { 
  saveQuestion, 
  updateQuestion,
} from "../../../api/question";

import { 
  addStudentToSubject,
  getSubjectById,
} from "../../../api/subject";

import { getQueryVariable } from "../../../commons/helpers/url-query";

const useFetchSubject = () => {
  const [snackbar, setSnackbar] = useState({ open: false });
  const [course, setCourse] = useState({});
  const courseId = getQueryVariable("courseId");

  const getCourseDetails = async () => {
    try {
      const { data } = await getSubjectById(courseId);
      
      setCourse(data);
    } catch (e) {
      console.log(e);
    }
  }
  
  const createQuestion = async (data) => {
    try {
      await saveQuestion(data);
      setSnackbar({ open: true, message: "Pregunta creada con exito!"});
    } catch (e) {
      console.log(e);
      setSnackbar({ open: true, message: "Hubo un error al crear la pregunta"});
    }
  }

  const editQuestion = async (data) => {
    try {
      await updateQuestion(data);
      setSnackbar({ open: true, message: "Pregunta editada con exito!"});
    } catch (e) {
      console.log(e);
      setSnackbar({ open: true, message: "Hubo un error al editar la pregunta"});
    }
  }

  const addStudentToCourse = async (data) => {
    try {
      await addStudentToSubject(courseId, data);
      await getCourseDetails();
      setSnackbar({ open: true, message: "Estudiante/s agregado/s con éxito"});
    } catch (e) {
      console.log(e);
      setSnackbar({ open: true, message: "Hubo un error al agregar el/los estudiante/s"});
    }
  }

  return {
    snackbar,
    setSnackbar,
    createQuestion,
    editQuestion,
    addStudentToCourse,
    getCourseDetails,
    course,
  }
};

export default useFetchSubject;