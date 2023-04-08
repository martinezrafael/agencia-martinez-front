import React, { useEffect, useState } from "react";
import WorksList from "./WorksList";
import apiData from "../src/utils/api.utils";

const App = () => {
  const [works, setWorks] = useState([]);

  const getWorks = async () => {
    try {
      const works = await apiData.getWorks();
      setWorks(works);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getWorks();
  }, []);

  return (
    <>
      <WorksList works={works} />
    </>
  );
};

export default App;
