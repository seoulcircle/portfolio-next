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

export interface IGetWeatherData {
  endpoint: string;
  base_date: string;
  base_time?: string;
}

export interface WeatherData {
  nowTemperature?: string;
  temperature?: string;
  humidity?: string;
  displayTemperature?: string;
  displayHumidity?: string;
  calcTemperature?: string;
  calcHumidity?: string;
}

export interface TodayWeather {
  time: string;
  temperature?: string;
  humidity?: string;
  calcTemperature?: string;
  calcHumidity?: string;
}
export interface SliderProps {
  isOpen: boolean;
  onClose: () => void;
  colors: { hour: number; color: string }[];
  todayWeather: TodayWeather[];
}

export interface DustData {
  pm10Value?: string;
  pm10Value24?: string;
  calcPm10Value?: string;
  calcPm10Value24?: string;
}

export interface WeatherModalProps {
  isOpen: boolean;
  onClose: () => void;
  weatherData: WeatherData | null;
  dustData: DustData | null;
  colorRGBA: ColorRGBA | null;
  modalType: "today" | "tomorrow";
}

export interface ColorRGBA {
  startRGBA: string;
  endRGBA: string;
}

export interface RGBAInput {
  temp: number;
  humidity: number;
  hour: number;
  pm: number;
}

export interface GradientInput {
  angle: number;
  startColor: string;
  endColor: string;
}

export interface WeatherDisplayData {
  temperature: string;
  humidity: string;
  pm10: string;
}

// 날씨 데이터 표시용 변환 함수
export const formatWeatherDisplay = (
  temperature?: string,
  humidity?: string,
  pm10?: string
): WeatherDisplayData => ({
  temperature: temperature ?? "-",
  humidity: humidity ?? "-",
  pm10: pm10 ?? "-",
});

export interface TimeState {
  hours: string;
  today: string;
  tmrToday: string;
  tomorrow: string;
}

export interface IDustData {
  stationName: string;
  pm10Value: string;
  pm10Value24: string;
}
