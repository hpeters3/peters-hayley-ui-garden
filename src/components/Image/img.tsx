import type { ImageProps } from './img.types';

export function Image({src, alt, backgroundColor, disabled}: ImageProps)
{
  return (
    <div style={{backgroundColor: disabled ? '#ccc' : backgroundColor, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1}}>
      <img src={src} alt={alt} style={{opacity: disabled ? 0.5 : 1,}}/>
    </div>
  );
}