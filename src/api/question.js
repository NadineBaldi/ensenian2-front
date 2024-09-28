import axios from "axios";
import { API_URL } from "../constants/environment";
import { TOKEN } from "../constants/util";
import { getCookie } from '../commons/helpers/cookies';

// Token
const token = getCookie(TOKEN);

const config = {
  headers: {
    Authorization: `Bearer ${token}`
  }
};

export function saveQuestion(data) {
  return axios.post(`${API_URL}/question/save`, data, config);
}

export function updateQuestion(data) {
    return axios.put(`${API_URL}/question/update`, data, config);
}

export function getQuestionsBySubjectId(subjectId) {
  return axios.get(`${API_URL}/question/find/subject/${subjectId}`, config);
}