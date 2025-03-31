import axios from "axios";

const BASE_URL = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0";
const SERVICE_KEY = process.env.NEXT_PUBLIC_API_URL as string; // 환경 변수에서 관리

export interface INowWeather {
  category: string;
  value: string;
  obsrValue: string;
}
export interface ITmrWeather {
  fcstDate: string;
  fcstTime: string;
  fcstValue: string;
  category: string;
}

interface IGetWeatherData {
  endpoint: string;
  base_date: string;
  base_time?: string;
}

const weatherClient = axios.create({
  baseURL: BASE_URL,
  params: {
    serviceKey: SERVICE_KEY,
    pageNo: "1",
    numOfRows: "1000",
    dataType: "JSON",
    nx: "55",
    ny: "127",
  },
});

// 날씨 공통 API 요청 함수
const getWeatherData = async <T>({
  endpoint,
  base_date,
  base_time,
}: IGetWeatherData): Promise<T[]> => {
  const params = {
    base_date,
    base_time: base_time || "0500",
  };

  try {
    const response = await weatherClient.get(`/${endpoint}`, { params });
    return response.data.response.body?.items?.item || [];
  } catch (error) {
    console.error(`날씨 API 요청 실패: ${endpoint}`, error);
    throw error;
  }
};

// 현재 날씨
export const getNowWeather = async (
  base_date: string,
  base_time: string
): Promise<INowWeather[]> => {
  return getWeatherData<INowWeather>({
    endpoint: "getUltraSrtNcst",
    base_date,
    base_time,
  });
};

// 오늘 & 내일 날씨 예보
export const getTmrWeather = async (
  base_date: string
): Promise<ITmrWeather[]> => {
  return getWeatherData<ITmrWeather>({
    endpoint: "getVilageFcst",
    base_date,
  });
};
