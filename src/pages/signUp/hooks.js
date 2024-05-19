import { useState } from "react";

//Api
import {
  getAllProvinces,
  getCityByProvinceId,
  getUniversitiesByCityId,
} from "../../api/commons";

const useFetchCommon = () => {
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [universities, setUniversities] = useState([]);

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

  return {
    provinces,
    cities,
    universities,
    loadProvinces,
    loadCities,
    loadUniversities,
  };
};

export default useFetchCommon;
