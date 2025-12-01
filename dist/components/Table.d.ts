import { HTMLAttributes } from 'react';
export interface TableProps extends HTMLAttributes<HTMLTableElement> {
    variant?: 'primary' | 'secondary';
}
export interface TableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {
}
export interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
}
export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
}
export interface TableHeadProps extends HTMLAttributes<HTMLTableCellElement> {
}
export interface TableCellProps extends HTMLAttributes<HTMLTableCellElement> {
}
export declare const Table: import('react').ForwardRefExoticComponent<TableProps & import('react').RefAttributes<HTMLTableElement>>;
export declare const TableHeader: import('react').ForwardRefExoticComponent<TableHeaderProps & import('react').RefAttributes<HTMLTableSectionElement>>;
export declare const TableBody: import('react').ForwardRefExoticComponent<TableBodyProps & import('react').RefAttributes<HTMLTableSectionElement>>;
export declare const TableRow: import('react').ForwardRefExoticComponent<TableRowProps & import('react').RefAttributes<HTMLTableRowElement>>;
export declare const TableHead: import('react').ForwardRefExoticComponent<TableHeadProps & import('react').RefAttributes<HTMLTableCellElement>>;
export declare const TableCell: import('react').ForwardRefExoticComponent<TableCellProps & import('react').RefAttributes<HTMLTableCellElement>>;
//# sourceMappingURL=Table.d.ts.map