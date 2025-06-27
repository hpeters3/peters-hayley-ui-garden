import type { Meta, StoryObj} from '@storybook/react-webpack5';
import { Label } from './label';

const meta: Meta<typeof Label> = {
  title: 'Label',
  component: Label,
  argTypes: {
    children: {control: 'text'},
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
    args: {
      children: "Hmm... what are the chances of you getting lost if you click the mystery button?",
      disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "Hmm... what are the chances of you getting lost if you click the mystery button?",
    backgroundColor: "#eee",
    disabled: true,
  },
};