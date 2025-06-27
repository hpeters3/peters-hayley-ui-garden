import type { HeroProps } from './hero.types';
import { FullScreen } from '../../Generic.styles.js';

export function Hero({src, alt, disabled}: HeroProps)
{
  return (
    <div role="hero" style={{backgroundColor: disabled ? '#eee' : 'white', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1}}>
      <FullScreen src={src} alt={alt} style={{opacity: disabled ? 0.5 : 1,}}/>
    </div>
  );
}