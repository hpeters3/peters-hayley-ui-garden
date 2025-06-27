import { Button } from './button';
import type { Meta, StoryObj} from '@storybook/react-webpack5';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    label: {control: 'text'},
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
    label: "Mystery Button",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Mystery Button",
    backgroundColor: '#ccc',
    disabled: true,
  },
};