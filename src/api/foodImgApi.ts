export default async function FoodImgApi(keyword: any) {
  try {
    console.log("keyword", keyword);
    return await fetch("https://namu.wiki/w/" + keyword);
  } catch (error) {
    console.log(error);
  }
}
