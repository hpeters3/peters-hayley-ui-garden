export interface RadioProps {
    selectedValue: string;
    onChange: (value: string) => void;
    backgroundColor?: string;
    disabled?: boolean;
}