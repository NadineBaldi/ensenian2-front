import { useState } from "react";

// Api
import { 
  saveQuestion, 
  updateQuestion,
} from "../../../api/question";

const useFetchQuestions = () => {
  const [snackbar, setSnackbar] = useState({ open: false });
  
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

  return {
    snackbar,
    setSnackbar,
    createQuestion,
    editQuestion,
  }
};

export default useFetchQuestions;