export interface IModalProps {
  title?: string;
  description?: string;
  content: JSX.Element;
  onClose: () => void;
}
