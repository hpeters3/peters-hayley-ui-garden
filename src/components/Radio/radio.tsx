import type { RadioProps } from './radio.types';

export function Radio({ selectedValue, onChange, disabled }: RadioProps) {
  return (
    <div role="radioButtons" style={{backgroundColor: disabled ? '#eee' : 'white', cursor: disabled ? 'not-allowed' : 'default', opacity: disabled ? 0.6 : 1}}>

        <input type="radio" id="yes" value="yes" checked={selectedValue === 'yes'} onChange={() => onChange?.('yes')} disabled={disabled} style={{cursor: disabled ? 'not-allowed' : 'default', opacity: disabled ? 0.6 : 1}}/>

        <label htmlFor="yes" style={{cursor: disabled ? 'not-allowed' : 'default', opacity: disabled ? 0.6 : 1}}>Yes</label>
    
        <input type="radio" id="no" value="no" checked={selectedValue === 'no'} onChange={() => onChange?.('no')} disabled={disabled} style={{cursor: disabled ? 'not-allowed' : 'default', opacity: disabled ? 0.6 : 1}}/>

        <label htmlFor="no" style={{cursor: disabled ? 'not-allowed' : 'default'}}>No</label>
    </div>
  );
}