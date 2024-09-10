// 옛날 데이터 URL
// const URL = "http://openapi.foodsafetykorea.go.kr/api/13f1789a0359487688b4/I2790/json/1/2/DESC_KOR=";

const URL =
  "https://apis.data.go.kr/1471000/FoodNtrCpntDbInfo01/getFoodNtrCpntDbInq01?serviceKey=9%2Bmjut77JeCgLpJnD6eoWV7TctBLzXUqwzvjS5DZS4cXBdUNbCP7uYZFMMFwhFHAmVkgOYxFi05sxTE6zqSqKA%3D%3D&pageNo=1&numOfRows=10&type=json&FOOD_NM_KR=";

export async function getCalorie(name: string | string[], setData: any) {
  try {
    const response = await fetch(URL + name);
    const json = await response.json();
    setData({ items: json.body.items, totalCount: json.body.totalCount });
  } catch (error) {
    console.error("데이터 불러오기 실패:", error);
  }
}

export async function FoodImgApi(keyword: any) {
  try {
    // console.log("keyword", keyword);
    return await fetch("https://ko.wikipedia.org/wiki/" + keyword);
  } catch (error) {
    console.log(error);
  }
}
