import type { ImageProps } from './img.types';

export function Image({ src, alt = 'doubt'}: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
    />
  );
}