export interface MinuteItemProps {
  minute: string;
  nowMinute: number;
  hour: number;
  randomQuestion: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  isDisabled: boolean;
}

export type TimeState = "past" | "present" | "future";

export type ModalDataType = Record<
  string,
  { question: string; answer: string }
>;

export interface ModalProps {
  modalData: ModalDataType;
}

export interface RenderedMinutesProps {
  minuteList: string[];
  timeHour: string;
  timeMinutes: string;
  userTextMap: Record<string, { question: string; answer: string }>;
  randomQuestion: Record<string, string>;
  handleChange: (
    key: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
