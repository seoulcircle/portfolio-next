import axios from "axios";

export interface IDustData {
  stationName: string;
  pm10Value: string;
  pm10Value24: string;
}

const SERVICE_KEY = process.env.NEXT_PUBLIC_API_URL as string;

// 미세먼지 API 요청 함수
export const getDustData = async (): Promise<IDustData[]> => {
  try {
    const response = await axios.get(
      `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty`,
      {
        params: {
          serviceKey: SERVICE_KEY,
          returnType: "json",
          numOfRows: "100",
          pageNo: "1",
          sidoName: "서울",
          ver: "1.1",
        },
      }
    );

    return response.data.response.body.items;
  } catch (error) {
    console.error("미세먼지 API 요청 실패:", error);
    throw error;
  }
};
