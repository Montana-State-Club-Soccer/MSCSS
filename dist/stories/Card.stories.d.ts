import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import('react').ForwardRefExoticComponent<import('..').CardProps & import('react').RefAttributes<HTMLDivElement>>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        variant: {
            control: "select";
            options: string[];
        };
        padding: {
            control: "select";
            options: string[];
        };
        colorScheme: {
            control: "select";
            options: string[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Elevated: Story;
export declare const Outlined: Story;
export declare const WithFooter: Story;
export declare const Hoverable: Story;
export declare const GoldScheme: Story;
//# sourceMappingURL=Card.stories.d.ts.map