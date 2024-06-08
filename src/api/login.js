import axios from "axios";
import { API_URL } from "../constants/environment";

export function login(data) {
  return axios.post(`${API_URL}/login`, data);
}