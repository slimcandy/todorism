import React from "react";
import { useTranslation } from "react-i18next";
import { TextBodySmall } from "./typography";
import { classesOf } from "../../utils";

export const TagMe = () => {
  const { t } = useTranslation();

  const classes = classesOf(
    "flex justify-center text-center",
    "rounded-full bg-green-1 dark:bg-green-0",
    "text-light-4 h-4",
    t("language") === "Русский" && "w-4",
    t("language") !== "Русский" && "w-7"
  );

  return (
    <div className={classes}>
      <TextBodySmall>{t("me")}</TextBodySmall>
    </div>
  );
};
