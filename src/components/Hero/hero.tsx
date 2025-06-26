import type { HeroProps } from './hero.types';
import { FullScreen } from '../../Generic.styles.js';

export function Hero({ src, alt = 'hero'}: HeroProps) {
  return <FullScreen src={src} alt={alt} />;
}