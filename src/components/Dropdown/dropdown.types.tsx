export interface DropdownProps {
  options: { value: string; label: string }[];
  onChange?: (value: string) => void;
  backgroundColor?: string;
  disabled?: boolean;
}