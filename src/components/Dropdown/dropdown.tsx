import React, { useState } from 'react';
import type { DropdownProps } from './dropdown.types';

export function Dropdown({ options, onChange }: DropdownProps) {
  const [selectedOption, setSelectedOption] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
    setSelectedOption(value);
    onChange?.(value);
  }

  return (
    <div>
      <p>What choice are you going to make?</p>
      <select id="yesno" value={selectedOption} onChange={handleChange}>
        <option value="">Make the right decision</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {selectedOption && <p>You're {selectedOption}? Are you sure?</p>}
    </div>
  );
}