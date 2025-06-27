import React from "react";
import { render, screen } from "@testing-library/react";
import { Image } from './img';
import { ImageProps } from './img.types';

function imageTests(Image: React.ComponentType<ImageProps>) {
  test('is visible', () => {
    render(<Image />);
    const img = screen.getByRole('img');
    expect(img).toBeVisible();
  });

  test('has regular background when enabled', () => {
    render(<Image disabled={false} />);
    const img = screen.getByRole('img');
    expect(img).toHaveStyle('background-color: white');
  });

  test('has gray background when disabled', () => {
    render(<Image disabled={true} />);
    const img = screen.getByRole('img');
    expect(img).toHaveStyle('background-color: #eee');
  });
}

describe('Image', () => {
    imageTests(Image);
});