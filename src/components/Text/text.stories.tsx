import type { Meta, StoryObj} from '@storybook/react-webpack5';
import { Text } from './text';

const meta: Meta<typeof Text> = {
  title: 'Text',
  component: Text,
  argTypes: {
    message: {control: 'text'},
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
    args: {
      message: "Do you dare click the mystery button? Without guidance, it can take you anymore, leaving you lost in the web.",
      disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    message: "Do you dare click the mystery button? Without guidance, it can take you anymore, leaving you lost in the web.",
    backgroundColor: "#eee",
    disabled: true,
  },
};