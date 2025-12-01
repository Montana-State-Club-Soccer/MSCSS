import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {},

};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p>Content for Tab 1</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p>Content for Tab 2</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p>Content for Tab 3</p>
      </TabsContent>
    </Tabs>
  ),
};

export const Secondary: Story = {
  render: () => (
    <Tabs defaultValue="stats">
      <TabsList>
        <TabsTrigger value="stats">Statistics</TabsTrigger>
        <TabsTrigger value="roster">Roster</TabsTrigger>
        <TabsTrigger value="schedule">Schedule</TabsTrigger>
      </TabsList>
      <TabsContent value="stats">
        <p>Team statistics content</p>
      </TabsContent>
      <TabsContent value="roster">
        <p>Team roster content</p>
      </TabsContent>
      <TabsContent value="schedule">
        <p>Team schedule content</p>
      </TabsContent>
    </Tabs>
  ),
};

export const WithRichContent: Story = {
  render: () => (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="details">Details</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="space-y-2">
          <h3 className="font-bold">Overview</h3>
          <p>This is the overview section with more detailed content.</p>
          <ul className="list-disc list-inside">
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
          </ul>
        </div>
      </TabsContent>
      <TabsContent value="details">
        <div className="space-y-2">
          <h3 className="font-bold">Details</h3>
          <p>This section contains detailed information.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};
