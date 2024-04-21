import React from "react";

const URL = "";

const CalorieDetail: React.FC<{ params: { id: string } }> = ({
  params: { id },
}) => {
  return <h1>detail {id}</h1>;
};

export default CalorieDetail;
