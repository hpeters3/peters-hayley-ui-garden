export interface TableProps {
  headers?: [string, string];
  rows: { ifYouDo: string; ifYouDont: string }[];
  footer: string;
}