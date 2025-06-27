import React from "react";
import { render, screen } from "@testing-library/react";
import { Radio } from './radio';
import { RadioProps } from './radio.types';


function radioTests(Radio: React.ComponentType<RadioProps>) {
  test('is visible', () => {
    render(<Radio />);
    const radio = screen.getByRole('radioButtons');
    expect(radio).toBeVisible();
  });

  test('has regular background when enabled', () => {
    render(<Radio disabled={false} />);
    const radio = screen.getByRole('radioButtons');
    expect(radio).toHaveStyle('background-color: white');
  });

  test('has gray background when disabled', () => {
    render(<Radio disabled={true} />);
    const radio = screen.getByRole('radioButtons');
    expect(radio).toHaveStyle('background-color: #eee');
  });
}

describe('Radio', () => {
  radioTests(Radio);
});