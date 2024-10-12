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

export function getTeacherInfo() {
  return axios.get(`${API_URL}/teacher/find/${userId}`, config)
}

export function updateTeacherInfo(data) {
  return axios.put(`${API_URL}/teacher/update`, data, config)
}

export function changePassword(data) {
  return axios.post(`${API_URL}/teacher/${userId}/change-password`, data, config)
}
