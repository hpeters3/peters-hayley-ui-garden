import React, { useState } from 'react';
import type { DropdownProps } from './dropdown.types';

export function Dropdown({ options, onChange, backgroundColor, disabled }: DropdownProps) {
  const [selectedOption, setSelectedOption] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
    setSelectedOption(value);
    if (!disabled) {
      onChange?.(value);
    }
  }

  return (
    <div style={{backgroundColor: disabled ? '#eee' : backgroundColor, padding: '1rem', cursor: disabled ? 'not-allowed' : 'default', opacity: disabled ? 0.6 : 1}}>
      <p>What choice are you going to make?</p>
      <select id="yesno" value={selectedOption} onChange={handleChange} disabled={disabled} style={{cursor: disabled ? 'not-allowed' : 'pointer',}}>
        <option value="">Make the right decision</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {selectedOption && (<p>You're {selectedOption}? Are you sure?</p>)}
    </div>
  );
}