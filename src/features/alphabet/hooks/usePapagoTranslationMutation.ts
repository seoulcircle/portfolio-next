import { useMutation } from "@tanstack/react-query";
import { getPapagoTranslation } from "../api/getPapagoTranslation";

export const usePapagoTranslationMutation = () => {
  return useMutation({
    mutationFn: getPapagoTranslation,
  });
};
