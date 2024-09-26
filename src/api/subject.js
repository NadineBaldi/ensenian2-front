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

export function getSubjectById() {
  return axios.get(`${API_URL}/subject/teacher/${userId}`, config)
}

export function saveSubject(data) {
  return axios.post(`${API_URL}/subject/save`, data, config)
}

export function changeSubjectName(data) {
  return axios.put(`${API_URL}/subject/update/name`, data, config)
}

export function changeSubjectStatus(data) {
  return axios.put(`${API_URL}/subject/update/state`, data, config)
}

export function changeSubjectDescription(data) {
  return axios.put(`${API_URL}/subject/update/description`, data, config)
}
