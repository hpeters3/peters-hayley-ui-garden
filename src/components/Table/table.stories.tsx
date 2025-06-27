import type { Meta, StoryObj} from '@storybook/react-webpack5';
import { Table } from './table';

const meta: Meta<typeof Table> = {
  title: 'Table',
  component: Table,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    rows: [{ ifYouDo: '100% chance', ifYouDont: '0%' },],
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    rows: [{ ifYouDo: '100% chance', ifYouDont: '0%' },],
    backgroundColor: "#eee",
    disabled: true,
  },
};