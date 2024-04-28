import cheerio from "cheerio";
import Image from "next/image";

async function FoodImgApi(keyword: any) {
  try {
    console.log("keyword", keyword);
    return await fetch("https://ko.wikipedia.org/wiki/" + keyword);
  } catch (error) {
    console.log(error);
  }
}

const Test11: React.FC = async () => {
  const parsing = async (keyword: any) => {
    const response: any = await FoodImgApi(keyword);
    const html = await response.text();
    const $ = cheerio.load(html);
    const $dataInfo = $(".infobox-image");

    let dataList: any = [];
    $dataInfo.each((idx, node) => {
      dataList.push({
        img: "https:" + $(node).find("img").attr("src"),
      });
    });
    // console.log("데이터", dataList);

    return dataList;
  };

  const data = await parsing("신라면");
  console.log(data[0].img);

  return (
    <>
      <h1>테스트중</h1>
      <img src={data[0].img} alt="" />
    </>
  );
};

export default Test11;
