import React, { useState } from "react";
import { IAccordionProps } from "./AccordionProps";
import { ArrowIcon } from "../../icons";
import { TextBodyStandard } from "../typography";

export const Accordion = (props: IAccordionProps) => {
  const { title, children } = props;

  const [active, setActive] = useState<boolean>(false);

  const handleOnChange = () => {
    setActive(!active);
  };

  return (
    <div className="collapse bg-black-2 rounded-lg">
      <input
        checked={active}
        type="checkbox"
        className="!min-h-fit py-3"
        onChange={handleOnChange}
      />
      <div className="collapse-title flex gap-x-2 justify-between items-center py-3 px-4 min-h-fit">
        <TextBodyStandard fontWeight="medium">
          {title}
          {active}
        </TextBodyStandard>
        <ArrowIcon
          className="flex shrink-0 pointer-events-none transition-all"
          size={16}
          direction={active ? "down" : "right"}
        />
      </div>
      <div className="collapse-content px-4 text-dark-4">{children}</div>
    </div>
  );
};
