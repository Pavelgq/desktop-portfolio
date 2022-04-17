import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: 's' | 'm';
    color?: 'primary' | 'gray' | 'green' | 'red';
    href?: string;
    children: ReactNode;
}