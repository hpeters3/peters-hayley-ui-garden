import type { RadioProps } from './radio.types';

export function Radio({ selectedValue, onChange }: RadioProps) {
    return (
        <div>
            <input
                type="radio"
                id="yes"
                value="yes"
                checked={selectedValue === "yes"}
                onChange={() => onChange("yes")}
            />
            <label htmlFor="yes">Yes</label>

            <input
                type="radio"
                id="no"
                value="no"
                checked={selectedValue === "no"}
                onChange={() => onChange("no")}
            />
            <label htmlFor="no">No</label>
        </div>
    );
}