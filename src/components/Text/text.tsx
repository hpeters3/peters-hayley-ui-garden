import type { TextProps } from './text.types';

export function Text({message, backgroundColor, disabled}: TextProps)
{
  return (
    <p style={{backgroundColor: disabled ? '#eee' : backgroundColor, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1}}>
      {message}
    </p>
  );
}