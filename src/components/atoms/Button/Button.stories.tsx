import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from ".";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "O conteúdo de texto a ser exibido dentro do botão.",
    },
    disabled: {
      control: "boolean",
      description: "Controla o estado desabilitado do botão.",
    },
    onClick: {
      action: "clicked",
      description: "Função a ser executada quando o botão é clicado.",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Clique Aqui",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
  },
};
