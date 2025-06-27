import React from "react";
import { render, screen } from "@testing-library/react";
import { Text } from './text';
import { TextProps } from './text.types';

function textTests(Text: React.ComponentType<TextProps>) {
  test('is visible', () => {
    render(<Text />);
    const text = screen.getByRole('text');
    expect(text).toBeVisible();
  });

  test('has regular background when enabled', () => {
    render(<Text disabled={false} />);
    const text = screen.getByRole('text');
    expect(text).toHaveStyle('background-color: white');
  });

  test('has gray background when disabled', () => {
    render(<Text disabled={true} />);
    const text = screen.getByRole('text');
    expect(text).toHaveStyle('background-color: #eee');
  });
}

describe('Text', () => {
  textTests(Text);
});