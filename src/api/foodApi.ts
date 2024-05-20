const URL =
  "http://openapi.foodsafetykorea.go.kr/api/13f1789a0359487688b4/I2790/json/1/2/DESC_KOR=";

export async function getCalorie(name: string) {
  const response = await fetch(URL + name);
  const json = await response.json();

  return json;
}

export async function FoodImgApi(keyword: any) {
  try {
    // console.log("keyword", keyword);
    return await fetch("https://ko.wikipedia.org/wiki/" + keyword);
  } catch (error) {
    console.log(error);
  }
}
