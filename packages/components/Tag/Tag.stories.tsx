import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";

const meta: Meta<typeof Tag> = {
  title: "Component/Tag",
  component: Tag,
  argTypes: {
    label: { control: "text" },
    deletable: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};
export default meta;

type Story = StoryObj<typeof Tag>;

const Template = (args: React.ComponentProps<typeof Tag>) => {
  const items = ["아이템 1", "아이템 2", "아이템 3"];
  const [tags, setTags] = useState(items);

  const handleDelete = (label: string) => {
    setTags((prev) => prev.filter((tag) => tag !== label));
  };
  return (
    <>
      {tags.map((tag) => (
        <Tag
          key={tag}
          label={tag}
          deletable={args.deletable}
          disabled={args.disabled}
          onDelete={() => handleDelete(tag)}
        />
      ))}
    </>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    label: "태그 아이템",
    deletable: true,
  },
};

export const Deletable: Story = {
  args: {
    label: "태그 아이템",
    deletable: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "태그 아이템",
    disabled: true,
  },
};
