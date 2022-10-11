export interface ICounterProps {
  value: string;
  label?: string;
  positive?: boolean;
  onChange: (value: string) => void;
}
