import React from 'react';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    variant?: 'default' | 'disabled';
    children: React.ReactNode;
}