import type { TextProps } from './text.types';

export function Text({message, disabled}: TextProps)
{
  return (
    <p role="text" style={{backgroundColor: disabled ? '#eee' : 'white', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1}}>
      {message}
    </p>
  );
}