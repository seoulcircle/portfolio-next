import { useMutation } from "@tanstack/react-query";
import { getWordDefinition } from "../api/word";

export const useWordDefinitionMutation = () => {
  return useMutation({
    mutationFn: getWordDefinition,
  });
};
