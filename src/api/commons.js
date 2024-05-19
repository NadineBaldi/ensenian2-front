import axios from "axios";
import { API_URL } from "../constants/environment";

export function getAllProvinces() {
  return axios.get(`${API_URL}/province/all`);
}

export function getCityByProvinceId(provinceId) {
  return axios.get(`${API_URL}/city/all/province/${provinceId}`);
}

export function getUniversitiesByCityId(cityId) {
  return axios.get(`${API_URL}/university/all/city/${cityId}`);
}

export function getUniversityById(univeristyId) {
  return axios.get(`${API_URL}/university/find/${univeristyId}`);
}
