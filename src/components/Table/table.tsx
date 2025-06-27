import type { TableProps } from './table.types';
import { TableCentered } from '../../Generic.styles.js';

export function Table({ headers = ["If you do:", "If you don't:"], rows, footer, disabled }: TableProps) {
  return (
    <TableCentered style={{backgroundColor: disabled ? '#eee' : 'white', cursor: disabled ? 'not-allowed' : 'default', opacity: disabled ? 0.6 : 1}}>
      <thead>
        <tr>
          <th>{headers[0]}</th>
          <th>{headers[1]}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td>{row.ifYouDo}</td>
            <td>{row.ifYouDont}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={2}>{footer}</td>
        </tr>
      </tfoot>
    </TableCentered>
  );
}