import { useState } from "react";
import { Button } from "../Button";
import { Tag } from "../Tag/Tag";
import { Toggle } from "../Toggle/Toggle";
import S from "./Demo.styles";
import { CircleAlert } from "lucide-react";

const Demo = () => {
  const [checked, setChecked] = useState(true);
  const tags = ["오늘의 키워드", "꾸준함", "긍정", "🍀"];
  const [deleteTags, setDeleteTags] = useState(tags);
  const handleDelete = (label: string) => {
    setDeleteTags((prev) => prev.filter((tag) => tag !== label));
  };

  return (
    <>
      <S.Title>안녕하세요, 반갑습니다.</S.Title>
      <S.Text>디자인 시스템에 오신 것을 환영합니다.</S.Text>
      <S.ButtonWrapper>
        <Button>버튼이에요</Button>
        <Button variant="danger" icon={<CircleAlert />}>
          위험
        </Button>
      </S.ButtonWrapper>
      <S.TagWrapper>
        {deleteTags.map((tag, index) => (
          <Tag
            key={index}
            label={tag}
            deletable
            onDelete={() => handleDelete(tag)}
          />
        ))}
      </S.TagWrapper>
      <S.ToggleWrapper>
        <span>행운 스위치</span>
        <Toggle checked={checked} onChange={setChecked} />;
      </S.ToggleWrapper>
    </>
  );
};

export default Demo;
