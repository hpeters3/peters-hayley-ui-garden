import React from "react";
import { render, screen } from "@testing-library/react";
import { Hero } from './hero';
import { HeroProps } from './hero.types';

function heroTests(Hero: React.ComponentType<HeroProps>) {
  test('is visible', () => {
    render(<Hero />);
    const hero = screen.getByRole('hero');
    expect(hero).toBeVisible();
  });

  test('has regular background when enabled', () => {
    render(<Hero disabled={false} />);
    const hero = screen.getByRole('hero');
    expect(hero).toHaveStyle('background-color: white');
  });

  test('has gray background when disabled', () => {
    render(<Hero disabled={true} />);
    const hero = screen.getByRole('hero');
    expect(hero).toHaveStyle('background-color: #eee');
  });
}

describe('Hero', () => {
  heroTests(Hero);
});