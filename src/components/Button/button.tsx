import type { ButtonProps } from './button.types';

export function Button(props: ButtonProps){
  const { children, ...rest} = props;
  return (
    <button {...rest}>
      {children}
    </button>
  )
}