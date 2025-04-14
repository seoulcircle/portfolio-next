/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const colorList = [
  "gray-100",
  "gray-200",
  "gray-300",
  "gray-400",
  "gray-500",
  "blue-100",
  "blue-200",
  "blue-300",
  "blue-400",
  "blue-500",
  "red-500",
  "green-500",
];

const Box = styled.div<{ color: string }>`
  width: 100px;
  height: 80px;
  background-color: var(--colors-${(props) => props.color});
  border: 1px solid #ccc;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 12px;
  padding-bottom: 4px;
  color: var(--colors-white);
`;

export const ColorPalette = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
      {colorList.map((color) => (
        <Box key={color} color={color}>
          {color}
        </Box>
      ))}
    </div>
  );
};
