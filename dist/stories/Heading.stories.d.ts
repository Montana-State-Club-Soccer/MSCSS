import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import('react').ForwardRefExoticComponent<import('..').HeadingProps & import('react').RefAttributes<HTMLHeadingElement>>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        as: {
            control: "select";
            options: string[];
        };
        variant: {
            control: "select";
            options: string[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const H1: Story;
export declare const H1Secondary: Story;
export declare const H2: Story;
export declare const H3: Story;
export declare const H4: Story;
export declare const H5: Story;
export declare const H6: Story;
//# sourceMappingURL=Heading.stories.d.ts.map