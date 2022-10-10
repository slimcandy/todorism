export enum TAGS_GROUP_SIZES {
  "s",
  "m",
  "l",
}

export type TTagsGroupSize = keyof typeof TAGS_GROUP_SIZES;

export interface ITagsGroupProps {
  tags: string[];
  activeTagIndex: number;
  onClick: (index: number) => void;
  size?: TTagsGroupSize;
  readonly?: boolean;
  localizationPath?: string;
}
