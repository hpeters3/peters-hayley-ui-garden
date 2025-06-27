import React from 'react';

export interface CardProps {
  children?: React.ReactNode;
  imageSrc: string;
  imageAlt?: string;
  title: string;
  description: string;
  backgroundColor?: string;
  disabled?: boolean;
}