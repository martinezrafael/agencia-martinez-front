import React from "react";

const WorksList = ({ works }) => {
  return (
    <ul>
      {works.map((work) => {
        <li key={work}>{work}</li>;
      })}
    </ul>
  );
};

export default WorksList;
