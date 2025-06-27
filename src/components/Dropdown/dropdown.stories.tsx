import type { Meta, StoryObj} from '@storybook/react-webpack5';
import { Dropdown } from './dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    options: [
        { label: 'Yes', value: 'going to click' },
        { label: 'No', value: 'not going to click' },
        ],
    backgroundColor: 'white',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    options: [
      { label: 'Yes', value: 'going to click' },
      { label: 'No', value: 'not going to click' },
      ],
    backgroundColor: 'white',
    disabled: true,
  },
};