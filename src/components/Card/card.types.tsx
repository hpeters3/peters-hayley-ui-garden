import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'disabled';
  children?: React.ReactNode;
  imageSrc: string;
  imageAlt?: string;
  title: string;
  description: string;
}