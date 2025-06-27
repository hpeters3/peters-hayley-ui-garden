import type { Meta, StoryObj} from '@storybook/react-webpack5';
import { Card } from './card';

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    backgroundColor: "white",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    backgroundColor: '#eee',
    disabled: true,
  },
};