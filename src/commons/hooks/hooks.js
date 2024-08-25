import { useState } from "react";

//Api
import {
  getAllProvinces,
  getCityByProvinceId,
  getUniversitiesByCityId,
} from "../../api/commons";

import {
  getTeacherInfo
} from "../../api/teacher";

const useFetchCommon = () => {
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [teacherInfo, setTeacherInfo] = useState({});

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
      if (data) setTeacherInfo(data);
    } catch (e) {
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
    loadTeacherInfo
  };
};

export default useFetchCommon;
