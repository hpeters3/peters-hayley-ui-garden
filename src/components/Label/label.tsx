import type { LabelProps } from './label.types';

export function Label({htmlFor, children, backgroundColor, disabled}: LabelProps)
{
  return (
    <label style={{backgroundColor: disabled ? '#eee' : backgroundColor, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1}}>
      {children}
    </label>
  );
}