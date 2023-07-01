export interface IRemoveListItemModal {
  title: string;
  description?: string;
  onRemoveClick: () => void;
  onCancelClick: () => void;
}
