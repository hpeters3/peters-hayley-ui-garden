import type { Meta, StoryObj} from '@storybook/react-webpack5';
import { Image } from './img';

const meta: Meta<typeof Image> = {
  title: 'Image',
  component: Image,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    backgroundColor: "white",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    backgroundColor: "#eee",
    disabled: true,
  },
};