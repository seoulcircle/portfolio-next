import axios from "axios";
import { IWordTranslation } from "../types/alphabet.types";
export const getPapagoTranslation = async (
  word: string
): Promise<IWordTranslation> => {
  const response = await axios.post("/api/translate", { word });
  return response.data;
};
