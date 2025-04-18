import { X } from "lucide-react";
import * as S from "./Tag.styles";

export type TagProps = {
  label: string;
  deletable?: boolean;
  disabled?: boolean;
  onDelete?: () => void;
};

export const Tag = ({ label, deletable, disabled, onDelete }: TagProps) => {
  return (
    <S.Container tabIndex={disabled ? -1 : 0} $disabled={disabled}>
      <S.Label>{label}</S.Label>
      {deletable && !disabled && (
        <S.DeleteButton type="button" aria-label="태그 삭제" onClick={onDelete}>
          <X size={14} />
        </S.DeleteButton>
      )}
    </S.Container>
  );
};
