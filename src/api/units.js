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

export function saveUnit(data) {
  return axios.post(`${API_URL}/unit/save`, data, config);
}

