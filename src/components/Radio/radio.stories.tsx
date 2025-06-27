import type { Meta, StoryObj} from '@storybook/react-webpack5';
import { Radio } from './radio';

const meta: Meta<typeof Radio> = {
  title: 'Radio',
  component: Radio,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
    args: {
      disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    backgroundColor: "#eee",
    disabled: true,
  },
};