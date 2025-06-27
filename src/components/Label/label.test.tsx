import React from "react";
import { render, screen } from "@testing-library/react";
import { Label } from './label';
import { LabelProps } from './label.types';

function labelTests(label: React.ComponentType<LabelProps>) {
  test('is visible', () => {
    render(<Label />);
    const label = screen.getByRole('label');
    expect(label).toBeVisible();
  });

  test('has regular background when enabled', () => {
    render(<Label disabled={false} />);
    const label = screen.getByRole('label');
    expect(label).toHaveStyle('background-color: white');
  });

  test('has gray background when disabled', () => {
    render(<Label disabled={true} />);
    const label = screen.getByRole('label');
    expect(label).toHaveStyle('background-color: #eee');
  });
}

describe('Label', () => {
  labelTests(Label);
});