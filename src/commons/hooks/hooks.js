import { useState } from "react";

//Api
import {
  getAllProvinces,
  getCityByProvinceId,
  getUniversitiesByCityId,
} from "../../api/commons";

import {
  getTeacherInfo,
  updateTeacherInfo,
  changePassword
} from "../../api/teacher";

const useFetchCommon = () => {
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [teacherInfo, setTeacherInfo] = useState({});
  const [snackbar, setSnackbar] = useState({ open: false});

  const loadProvinces = async () => {
    try {
      const { data } = await getAllProvinces();
      if (data) setProvinces(data);
    } catch (e) {
      console.log(e);
    }
  };

  const loadCities = async (provinceId) => {
    try {
      const { data } = await getCityByProvinceId(provinceId);
      if (data) setCities(data);
    } catch (e) {
      console.log(e);
    }
  };

  const loadUniversities = async (cityId) => {
    try {
      const { data } = await getUniversitiesByCityId(cityId);
      if (data) setUniversities(data);
    } catch (e) {
      console.log(e);
    }
  };

  const loadTeacherInfo = async () => {
    try {
      const { data } = await getTeacherInfo();
      if (data) setTeacherInfo({ 
        ...data, 
        city: data.city.id, 
        university: data.university.id,
        provinceSelected: data.city.province.id,
        email: data.username,
      });
    } catch (e) {
      console.log(e);
    }
  }

  const updateTeacher = async (data) => {
    try {
      await updateTeacherInfo(data);
      await loadTeacherInfo();
      setSnackbar({ open: true, message: "Datos guardados correctamente" });
    } catch (e) {
      setSnackbar({ open: true, message: "Ocurrió un error, intente nuevamente"});
      console.log(e);
    }
  }

  const updatePassword = async (data) => {
    try {
      await changePassword(data);
      setSnackbar({ open: true, message: "Contraseña guardada correctamente" });
    } catch (e) {
      setSnackbar({ open: true, message: "Ocurrió un error, intente nuevamente"});
      console.log(e);
    }
  }

  return {
    provinces,
    cities,
    universities,
    teacherInfo,
    loadProvinces,
    loadCities,
    loadUniversities,
    loadTeacherInfo,
    snackbar, 
    setSnackbar,
    updateTeacher,
    updatePassword
  };
};

export default useFetchCommon;
