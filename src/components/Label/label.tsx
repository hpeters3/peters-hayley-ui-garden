import type { LabelProps } from './label.types';

export function Label({children, disabled}: LabelProps)
{
  return (
    <label role="label" style={{backgroundColor: disabled ? '#eee' : 'white', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1}}>
      {children}
    </label>
  );
}