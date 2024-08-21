import axios from "axios";
import { API_URL } from "../constants/environment";

export function login(data) {
  return axios.post(`${API_URL}/login`, data);
}

export function getCurrentUser(token) {
  return axios.get(`${API_URL}/teacher/current`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}