import axios from "axios";

export interface IWordDefinition {
  definition: string;
}

export const getWordDefinition = async (
  word: string
): Promise<IWordDefinition> => {
  try {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );

    const definition =
      response.data?.[0]?.meanings?.[0]?.definitions?.[0]?.definition;

    return {
      definition: definition || "No definition found.",
    };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return { definition: "No definition found." };
    }

    console.error("단어 API 요청 실패:", error);
    throw error;
  }
};
