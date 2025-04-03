import axios from "axios";

export interface IWordTranslation {
  translated: string;
}

export const getPapagoTranslation = async (
  word: string
): Promise<IWordTranslation> => {
  const response = await axios.post("/api/translate", { word });
  return response.data;
};
