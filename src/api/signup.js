import axios from "axios";
import { API_URL } from "../constants/environment";

export function signup(data) {
  return axios.post(`${API_URL}/teacher/save`, data);
}
