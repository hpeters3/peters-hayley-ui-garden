import React from "react";
import { render, screen } from "@testing-library/react";
import { Table } from './table';
import { TableProps } from './table.types';

function tableTests(table: React.ComponentType<TableProps>) {
  const row = [{ ifYouDo: "100% chance", ifYouDont: "0% chance" },];

  test('is visible', () => {
      render(<Table rows={row}/>);
      const table = screen.getByRole('table');
      expect(table).toBeVisible();
  });  
  test('has regular background when enabled', () => {
      render(<Table rows={row} disabled={false} />);
      const table = screen.getByRole('table');
      expect(table).toHaveStyle('background-color: white');
  });  
  test('has gray background when disabled', () => {
    render(<Table rows={row} disabled={true} />);
    const table = screen.getByRole('table');
    expect(table).toHaveStyle('background-color: #eee');
  });
}

describe('Table', () => {
  tableTests(Table);
});