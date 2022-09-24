export enum TAGS_GROUP_SIZES {
  "s",
  "m",
  "l",
}

export type TTagsGroupSize = keyof typeof TAGS_GROUP_SIZES;

export interface ITagsGroupProps {
  tags: string[];
  activeTagIndex: number;
  readonly: boolean;
  size: TTagsGroupSize;
  onClick: (index: number) => number;
}
