import axios from "axios";
import { API_URL } from "../constants/environment";

export function getAllCities() {
  return axios.get(`${API_URL}/ciudad/all`);
}

export function getCity(cityId) {
  return axios.get(`${API_URL}/ciudad/find/${cityId}`);
}

export function getAllProvinceCities(provinceId) {
  return axios.get(`${API_URL}/ciudad/all/provincia/${provinceId}`);
}

export function getAllProvinces() {
  return axios.get(`${API_URL}/provincia/all`);
}

export function getProvince(provinceId) {
  return axios.get(`${API_URL}/provincia/find/${provinceId}`);
}

export function getAllCountryProvinces(countryId) {
  return axios.get(`${API_URL}/provincia/all/pais/${countryId}`);
}

export function getAllCountries() {
  return axios.get(`${API_URL}/pais/all`);
}

export function getCountry(countryId) {
  return axios.get(`${API_URL}/pais/find/${countryId}`);
}

export function getAllUniversities() {
  return axios.get(`${API_URL}/universidad/all`);
}

export function getUniversity(universityId) {
  return axios.get(`${API_URL}/universidad/find/${universityId}`);
}

export function getAllProvinceUniversities(provinceId) {
  return axios.get(`${API_URL}/universidad/all/ciudad/${provinceId}`); //se cambia a provincia chequear
}
