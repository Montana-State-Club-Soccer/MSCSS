import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import('react').ForwardRefExoticComponent<import('..').ButtonProps & import('react').RefAttributes<HTMLButtonElement>>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        variant: {
            control: "select";
            options: string[];
        };
        iconPosition: {
            control: "select";
            options: string[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const WithIconLeft: Story;
export declare const WithIconRight: Story;
export declare const FullWidth: Story;
export declare const Disabled: Story;
export declare const WithIcon: Story;
//# sourceMappingURL=Button.stories.d.ts.map