export interface IModalProps {
  title?: string;
  description?: string;
  content: JSX.Element;
  onShow: (value: boolean) => void;
}
