import { useState } from "react";

// Api
import { 
  saveQuestion, 
  updateQuestion,
  getQuestionsBySubjectId,
  deleteQuestion,
} from "../../../api/question";

import { 
  saveExam,
  deleteExam,
  getExamsBySubjectId,
  updateExam,
} from "../../../api/exam";

import { 
  addStudentToSubject,
  getSubjectById,
  removeStudentFromSubject
} from "../../../api/subject";

import { getUnitById, saveUnit, deleteUnitById, updateUnit } from "../../../api/units";

import { getQueryVariable } from "../../../commons/helpers/url-query";

const useFetchSubject = () => {
  const [snackbar, setSnackbar] = useState({ open: false });
  const [course, setCourse] = useState({});
  const [questions, setQuestions] = useState([]);
  const courseId = getQueryVariable("courseId");
  const [unitData, setUnitData] = useState([]);
  const [exams, setExams] = useState([]);

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
      await saveQuestion({...data, subjectEntityId: courseId });
      await getQuestions();
      setSnackbar({ open: true, message: "Pregunta creada con exito!"});
    } catch (e) {
      console.log(e);
      setSnackbar({ open: true, message: "Hubo un error al crear la pregunta"});
    }
  }

  const editQuestion = async (data) => {
    try {
      await updateQuestion({...data, subjectEntityId: courseId });
      await getQuestions();
      setSnackbar({ open: true, message: "Pregunta editada con exito!"});
    } catch (e) {
      console.log(e);
      setSnackbar({ open: true, message: "Hubo un error al editar la pregunta"});
    }
  }

  const removeQuestion = async (questionId) => {
    try {
      await deleteQuestion(questionId);
      await getQuestions();
      setSnackbar({ open: true, message: "Pregunta borrada con exito!"});
    } catch (e) {
      setSnackbar({ open: true, message: "Hubo un error al borrar la pregunta"});
      console.log(e);
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

  const getUnitData = async (unitId) => {
    try {
      const { data } = await getUnitById(unitId);
      
      setUnitData(data);
    } catch (e) {
      console.log(e);
    }
  }

  const saveNewUnit = async (data) => {
    try {
      await saveUnit({ ...data, subjectEntityId: courseId });
      await getCourseDetails();
      setSnackbar({ open: true, message: "Unidad creada con éxito"});
    } catch (e) {
      console.log(e);
      setSnackbar({ open: true, message: "Hubo un error al crear la unidad"});
    }
  }

  const deleteUnit = async (unitId) => {
    try {
      await deleteUnitById(unitId);
      await getCourseDetails();
      setSnackbar({ open: true, message: "Unidad removida con éxito"});
    } catch (e) {
      console.log(e);
      setSnackbar({ open: true, message: "Hubo un error al remover la unidad"});
    }
  }

  const updateUnitDetails = async (data) => {
    try {
      await updateUnit({ ...data, subjectEntityId: courseId });
      await getCourseDetails();
      setSnackbar({ open: true, message: "Unidad editada con éxito"});
    } catch (e) {
      console.log(e);
      setSnackbar({ open: true, message: "Hubo un error al editar la unidad"});
    }
  }

  const getExams = async () => {
    try {
      const { data } = await getExamsBySubjectId(courseId);
      
      setExams(data);
    } catch (e) {
      console.log(e);
    }
  }

  const createExam = async (data) => {
    try {
      await saveExam({...data, subjectId: courseId });
      await getExams();
      setSnackbar({ open: true, message: "Examen creado con exito!"});
    } catch (e) {
      console.log(e);
      setSnackbar({ open: true, message: "Hubo un error al crear el examen"});
    }
  }

  const editExam = async (data) => {
    try {
      await updateExam(data);
      await getExams();
      setSnackbar({ open: true, message: "Examen editado con exito!"});
    } catch (e) {
      console.log(e);
      setSnackbar({ open: true, message: "Hubo un error al editar el examen"});
    }
  }

  const removeExam = async (examId) => {
    try {
      await deleteExam(examId);
      await getExams();
      setSnackbar({ open: true, message: "Examen borrado con exito!"});
    } catch (e) {
      console.log(e);
      setSnackbar({ open: true, message: "Hubo un error al borrar el examen"});
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
    removeQuestion,
    questions,
    getUnitData,
    unitData,
    saveNewUnit,
    deleteUnit,
    updateUnitDetails,
    createExam,
    removeExam,
    getExams,
    exams,
    editExam,
  }
};

export default useFetchSubject;