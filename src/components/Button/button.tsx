import type { ButtonProps } from './button.types';

export function Button({label, backgroundColor, disabled}: ButtonProps)
{
  return (
    <button disabled={disabled} style={{backgroundColor: disabled ? '#ccc' : backgroundColor, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1}}>
      {label}
    </button>
  );
}