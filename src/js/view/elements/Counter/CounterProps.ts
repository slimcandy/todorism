export interface ICounterProps {
  value: number;
  label?: string;
  positive?: boolean;
  onChange: (value: string) => void;
}
