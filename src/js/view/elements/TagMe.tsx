import React from "react";
import { useTranslation } from "react-i18next";
import { TextBodySmall } from "./typography";

export const TagMe = () => {
    const { t } = useTranslation();

    return (
        <div className="flex justify-center text-center 
        rounded-full bg-green-1 dark:bg-green-0
        text-light-4 h-4 w-4">
            <TextBodySmall>{t("me")}</TextBodySmall>
        </div>
    )
}