import { useState } from "react";

//Api
import { getAllProvinces, getAllProvinceUniversities } from "../../api/commons";

const useFetchCommon = () => {
  const [provinces, setProvinces] = useState([]);
  const [universities, setUniversities] = useState([]);

  const loadProvinces = async () => {
    try {
      const { data } = await getAllProvinces();
      if (data) setProvinces(data);
    } catch (e) {
      console.log(e);
    }
  };

  const loadUniversities = async (provinceId) => {
    try {
      const { data } = await getAllProvinceUniversities(provinceId);
      if (data) setUniversities(data);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    provinces,
    universities,
    loadProvinces,
    loadUniversities,
  };
};

export default useFetchCommon;
