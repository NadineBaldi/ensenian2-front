import { useState } from "react";

// Api
import { 
  saveQuestion, 
  updateQuestion,
  getQuestionsBySubjectId,
} from "../../../api/question";

import { 
  addStudentToSubject,
  getSubjectById,
  removeStudentFromSubject
} from "../../../api/subject";

import { getQueryVariable } from "../../../commons/helpers/url-query";

const useFetchSubject = () => {
  const [snackbar, setSnackbar] = useState({ open: false });
  const [course, setCourse] = useState({});
  const [questions, setQuestions] = useState([]);
  const courseId = getQueryVariable("courseId");

  const getCourseDetails = async () => {
    try {
      const { data } = await getSubjectById(courseId);
      
      setCourse(data);
    } catch (e) {
      console.log(e);
    }
  }

  const getQuestions = async () => {
    try {
      const { data } = await getQuestionsBySubjectId(courseId);
      
      setQuestions(data);
    } catch (e) {
      console.log(e);
    }
  }
  
  const createQuestion = async (data) => {
    try {
      await saveQuestion(data);
      await getQuestions();
      setSnackbar({ open: true, message: "Pregunta creada con exito!"});
    } catch (e) {
      console.log(e);
      setSnackbar({ open: true, message: "Hubo un error al crear la pregunta"});
    }
  }

  const editQuestion = async (data) => {
    try {
      await updateQuestion(data);
      await getQuestions();
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

  const deleteStudentFromSubject = async (studentDocketId) => {
    try {
      const { data } = await removeStudentFromSubject(courseId, studentDocketId);
      setCourse(data);
      setSnackbar({ open: true, message: "Estudiante removido con éxito"});
    } catch (e) {
      console.log(e);
      setSnackbar({ open: true, message: "Hubo un error al remover el estudiante"});
    }
  }


  return {
    snackbar,
    setSnackbar,
    createQuestion,
    editQuestion,
    addStudentToCourse,
    getCourseDetails,
    deleteStudentFromSubject,
    course,
    getQuestions,
    questions,
  }
};

export default useFetchSubject;