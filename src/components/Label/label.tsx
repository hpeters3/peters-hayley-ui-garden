import type { LabelProps } from './label.types';

export function Label({ htmlFor, children, className }: LabelProps) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor}>{children}</label>
    </div>
  );
}