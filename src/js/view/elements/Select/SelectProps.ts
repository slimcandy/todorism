export interface ISelectProps {
  value: string;
  options: string[];
  label?: string;
  localizationPath?: string;
  onChange: (option: string) => void;
}
