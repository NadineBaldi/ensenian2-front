import axios from "axios";
import { API_URL } from "../constants/environment";
import { TOKEN, USER_ID } from "../constants/util";
import { getCookie } from '../commons/helpers/cookies';

// Token
const token = getCookie(TOKEN);
const userId = getCookie(USER_ID);

const config = {
  headers: {
    Authorization: `Bearer ${token}`
  }
};

export function saveExam(data) {
  return axios.post(`${API_URL}/exam/create`, { ...data, teacherId: userId }, config);
}

export function deleteExam(examId) {
  return axios.delete(`${API_URL}/exam/delete/id/${examId}`, config);
}

export function getExamsBySubjectId(subjectId) {
  return axios.get(`${API_URL}/exam/find/subject/${subjectId}`, config);
}

export function updateExam(data) {
  return axios.put(`${API_URL}/exam/update`, data, config);
}
