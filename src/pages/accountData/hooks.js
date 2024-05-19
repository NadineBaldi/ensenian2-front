import { useState } from "react";

//Api
import {
  getAllProvinces,
  getCityByProvinceId,
  getUniversityById,
} from "../../api/commons";

const useFetchCommon = () => {
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [universityData, setUniversityData] = useState({});

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

  const getUniversityInfoById = async (universityId) => {
    try {
      const { data } = await getUniversityById(universityId);
      if (data) setUniversityData(data);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    provinces,
    cities,
    universityData,
    loadProvinces,
    loadCities,
    getUniversityInfoById,
  };
};

export default useFetchCommon;
