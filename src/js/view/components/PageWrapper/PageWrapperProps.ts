import React from "react";

export interface IPageWrapperProps {
  pageContent?: JSX.Element;
  pageFooter?: React.ReactNode;
  className?: string;
  verticalTopPageContent?: boolean;
}
