import { HTMLAttributes } from 'react';
export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
}
export interface TabsListProps extends HTMLAttributes<HTMLDivElement> {
}
export interface TabsTriggerProps extends HTMLAttributes<HTMLButtonElement> {
    value: string;
}
export interface TabsContentProps extends HTMLAttributes<HTMLDivElement> {
    value: string;
}
export declare const Tabs: import('react').ForwardRefExoticComponent<TabsProps & import('react').RefAttributes<HTMLDivElement>>;
export declare const TabsList: import('react').ForwardRefExoticComponent<TabsListProps & import('react').RefAttributes<HTMLDivElement>>;
export declare const TabsTrigger: import('react').ForwardRefExoticComponent<TabsTriggerProps & import('react').RefAttributes<HTMLButtonElement>>;
export declare const TabsContent: import('react').ForwardRefExoticComponent<TabsContentProps & import('react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Tabs.d.ts.map