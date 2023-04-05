type BtnType = JSX.IntrinsicElements["button"]["type"];

export interface BtnIconProps {
  icon: JSX.Element;
  type?: BtnType;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}
