import deleteItem1 from '../../../../assets/images/deleteItem1.png'
import deleteItem2 from '../../../../assets/images/deleteItem2.png'

type TFacContentTypes = "text" | "image";

export interface IFaqContent {
  id: string;
  values: IFaqContentValue[];
}

export interface IFaqContentValue {
  type: TFacContentTypes;
  value: string;
  alt?: string,
}

export const faqContent: Array<IFaqContent> = [
  {
    id: "blockedItem",
    values: [{ type: "text", value: "text1" }],
  },
  {
    id: "leaveEvent",
    values: [{ type: "text", value: "text1" }],
  },
  {
    id: "deleteItem",
    values: [
      { type: "text", value: "text1" },
      { type: "image", value: deleteItem1, alt: 'Картинка удаления вещи 1' },
      { type: "text", value: "text2" },
      { type: "image", value: deleteItem2, alt: 'Картинка удаления вещи 2' },
    ],
  },
];
