import type { Meta, StoryObj} from '@storybook/react-webpack5';
import { Hero } from './hero';

const meta: Meta<typeof Hero> = {
  title: 'Hero',
  component: Hero,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    backgroundColor: '#eee',
    disabled: true,
  },
};