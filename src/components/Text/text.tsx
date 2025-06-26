import type { TextProps } from './text.types';

export function Text({ message }: TextProps) {
  return (
    <div className="App">
      <p>{message}</p>
    </div>
  );
}