import type { Meta, StoryObj } from '@storybook/react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../components/Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Position</TableHead>
          <TableHead>Number</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>Forward</TableCell>
          <TableCell>10</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>Midfielder</TableCell>
          <TableCell>8</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Mike Johnson</TableCell>
          <TableCell>Defender</TableCell>
          <TableCell>5</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const Secondary: Story = {
  render: () => (
    <Table variant="secondary">
      <TableHeader>
        <TableRow>
          <TableHead>Player</TableHead>
          <TableHead>Goals</TableHead>
          <TableHead>Assists</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>15</TableCell>
          <TableCell>8</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>12</TableCell>
          <TableCell>10</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const WithManyColumns: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Position</TableHead>
          <TableHead>Number</TableHead>
          <TableHead>Goals</TableHead>
          <TableHead>Assists</TableHead>
          <TableHead>Appearances</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>Forward</TableCell>
          <TableCell>10</TableCell>
          <TableCell>15</TableCell>
          <TableCell>8</TableCell>
          <TableCell>25</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>Midfielder</TableCell>
          <TableCell>8</TableCell>
          <TableCell>12</TableCell>
          <TableCell>10</TableCell>
          <TableCell>28</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
