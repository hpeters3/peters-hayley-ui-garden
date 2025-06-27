import type { ImageProps } from './img.types';

export function Image({src, alt, disabled}: ImageProps)
{
  return (
    <img style={{backgroundColor: disabled ? '#eee' : 'white', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1}}src={src} alt={alt}/>
  );
}