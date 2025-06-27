import type { HeroProps } from './hero.types';
import { FullScreen } from '../../Generic.styles.js';

export function Hero({src, alt, backgroundColor, disabled}: HeroProps)
{
  return (
    <div style={{backgroundColor: disabled ? '#ccc' : backgroundColor, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1}}>
      <FullScreen src={src} alt={alt} style={{opacity: disabled ? 0.5 : 1,}}/>
    </div>
  );
}