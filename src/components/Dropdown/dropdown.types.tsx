export interface DropdownProps {
  variant?: 'default' | 'disabled';
  options: { value: string; label: string }[];
  onChange?: (value: string) => void;
}