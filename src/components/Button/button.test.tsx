import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from './button';
import { ButtonProps } from './button.types';

function buttonTests(Button: React.ComponentType<ButtonProps>) {
  test('is visible', () => {
    render(<Button />);
    const button = screen.getByRole('button');
    expect(button).toBeVisible();
  }); 
  test('has regular background when enabled', () => {
    render(<Button disabled={false} />);
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('background-color: white');
  }); 
  test('has gray background when disabled', () => {
    render(<Button disabled={true} />);
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('background-color: #eee');
  });
}

describe('Button', () => {
  buttonTests(Button);
});