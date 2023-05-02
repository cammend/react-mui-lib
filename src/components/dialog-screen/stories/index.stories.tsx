import type { Meta, StoryObj } from '@storybook/react';
import { DialogScreen }  from '..';

const meta = {
  title: 'Modal/DialogScreen',
  component: DialogScreen,
  tags: ['autodocs'],
  parameters: {
    title: 'Título del diálogo',
  },
  argTypes: { handleAccept: { action: 'Accept' }, handleClose: { action: 'Close' } },
} satisfies Meta<typeof DialogScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DialogScreenComp: Story = {
  args: {
    title: 'Título del diálogo',
  },
};
