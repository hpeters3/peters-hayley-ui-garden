import type { ButtonProps } from './button.types';

export function Button({label, disabled}: ButtonProps)
{
  return (
    <button disabled={disabled} style={{backgroundColor: disabled ? '#eee' : 'white', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1}}>
      {label}
    </button>
  );
}