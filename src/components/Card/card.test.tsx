import React from "react";
import { render, screen } from "@testing-library/react";
import { Card } from './card';
import { CardProps } from './card.types';

function cardTests(Card: React.ComponentType<CardProps>) {
  test('is visible', () => {
    render(<Card />);
    const card = screen.getByRole('card');
    expect(card).toBeVisible();
  });

  test('has regular background when enabled', () => {
    render(<Card disabled={false} />);
    const card = screen.getByRole('card');
    expect(card).toHaveStyle('background-color: white');
  });

  test('has gray background when disabled', () => {
    render(<Card disabled={true} />);
    const card = screen.getByRole('card');
    expect(card).toHaveStyle('background-color: #eee');
  });
}

describe('Card', () => {
  cardTests(Card);
});