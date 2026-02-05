import S from "./Color.styles";

const colorGroups = [
  {
    name: "Gray",
    colors: [
      "gray-10",
      "gray-20",
      "gray-30",
      "gray-40",
      "gray-50",
      "gray-60",
      "gray-70",
      "gray-80",
      "gray-90",
    ],
  },
  {
    name: "Blue",
    colors: ["blue-10", "blue-20", "blue-30", "blue-40", "blue-50"],
  },
  {
    name: "Red",
    colors: ["red-30", "red-40", "red-50"],
  },
  {
    name: "Green",
    colors: ["green-30", "green-40"],
  },
  {
    name: "Test",
    colors: ["test-color"],
  },
];

export const Color = () => {
  return (
    <S.Wrapper>
      {colorGroups.map((group) => (
        <div key={group.name}>
          <S.GroupTitle>{group.name}</S.GroupTitle>
          <S.ColorGroup>
            {group.colors.map((color) => (
              <S.Box key={color} color={color}>
                {color}
              </S.Box>
            ))}
          </S.ColorGroup>
        </div>
      ))}
    </S.Wrapper>
  );
};
