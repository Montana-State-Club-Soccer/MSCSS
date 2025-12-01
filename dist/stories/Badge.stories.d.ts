import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import('react').ForwardRefExoticComponent<import('..').BadgeProps & import('react').RefAttributes<HTMLSpanElement>>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        variant: {
            control: "select";
            options: string[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const New: Story;
export declare const Score: Story;
//# sourceMappingURL=Badge.stories.d.ts.map