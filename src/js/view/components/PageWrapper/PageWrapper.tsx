import React from "react";
import { IPageWrapperProps } from "./PageWrapperProps";
import { Loader } from "../Loader/Loader";
import { classesOf } from "../../../utils";

export const PageWrapper = (props: IPageWrapperProps) => {
  const {
    pageContent,
    pageFooter,
    className = "",
    verticalTopPageContent = false,
  } = props;

  const pageWrapperClasses = classesOf(
    "flex flex-col items-stretch w-full",
    className
  );

  const pageContentClasses = classesOf(
    "flex grow justify-center",
    verticalTopPageContent && "items-start",
    !verticalTopPageContent && "items-center"
  );

  return (
    <>
      <Loader />

      <div className={pageWrapperClasses}>
        <div className={pageContentClasses}>{pageContent}</div>
        {pageFooter}
      </div>
    </>
  );
};
