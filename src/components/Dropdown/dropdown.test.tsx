import React from "react";
import { render, screen } from "@testing-library/react";
import { Dropdown } from './dropdown';
import { DropdownProps } from './dropdown.types';

function dropdownTests(Dropdown: React.ComponentType<DropdownProps>) {
  const options = [
    { value: 'going to click', label: 'Click' },
    { value: 'not going to click', label: "Don't click" },
  ];  
    test('is visible', () => {
    render(<Dropdown options={options}/>);
    const dropdown = screen.getByRole('dropdown');
    expect(dropdown).toBeVisible();
  }); 
  test('has regular background when enabled', () => {
    render(<Dropdown options={options} disabled={false} />);
    const dropdown = screen.getByRole('dropdown');
    expect(dropdown).toHaveStyle('background-color: white');
  }); 
  test('has gray background when disabled', () => {
    render(<Dropdown options={options} disabled={true} />);
    const dropdown = screen.getByRole('dropdown');
    expect(dropdown).toHaveStyle('background-color: #eee');
  });
}

describe('Dropdown', () => {
  dropdownTests(Dropdown);
});