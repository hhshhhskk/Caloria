import React from "react";

const URL =
  "http://openapi.foodsafetykorea.go.kr/api/13f1789a0359487688b4/I2790/json/1/2/DESC_KOR=";

async function getCalorie(name: string) {
  const response = await fetch(URL + name);
  const json = await response.json();

  return json;
}

interface FoodData {
  I2790: {
    total_count: string;
    row: {
      NUTR_CONT8: string;
      NUTR_CONT9: string;
      NUTR_CONT4: string;
      NUTR_CONT5: string;
      NUTR_CONT6: string;
      NUM: string;
      NUTR_CONT7: string;
      NUTR_CONT1: string;
      NUTR_CONT2: string;
      SUB_REF_NAME: string;
      NUTR_CONT3: string;
      RESEARCH_YEAR: string;
      MAKER_NAME: string;
      GROUP_NAME: string;
      SERVING_SIZE: string;
      SERVING_UNIT: string;
      SAMPLING_REGION_NAME: string;
      SAMPLING_MONTH_CD: string;
      SAMPLING_MONTH_NAME: string;
      DESC_KOR: string;
      SAMPLING_REGION_CD: string;
      FOOD_CD: string;
    }[];
  };
  RESULT: {
    MSG: string;
    CODE: string;
  };
}

const CalorieDetail: React.FC<{ params: { id: string } }> = async ({
  params: { id },
}) => {
  const encodedString = id;
  const decodedString = decodeURIComponent(encodedString);
  console.log(decodedString);

  const calorie: FoodData = await getCalorie(id);
  const total = await calorie.I2790.total_count;

  return (
    <>
      <h1>검색어: {decodedString}</h1>
      <h2>전체수: {total}</h2>
      {calorie?.I2790?.row.map((data, idx) => {
        return (
          <div key={idx}>
            <div>제품명: {data?.DESC_KOR}</div>
            <div>열량(kcal): {data?.NUTR_CONT1}</div>
            <div>탄수화물(g): {data?.NUTR_CONT2}</div>
            <div>단백질(g): {data?.NUTR_CONT3}</div>
            <div>지방(g): {data?.NUTR_CONT4}</div>
            <div>당류(g): {data?.NUTR_CONT5}</div>
          </div>
        );
      })}
    </>
  );
};

export default CalorieDetail;
