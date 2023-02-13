import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  MemoInput as Input,
  TextBodyStandard,
  TitleH1,
  ActionPanel,
} from "../../elements";
import { CopyIcon } from "../../icons/CopyIcon";
import { PageWrapper } from "../../components";
import { classesOf, copyUrl } from "../../../utils";

import BackPackLogo from "./images/backpack.png";
import BackPackLogo_2x from "./images/backpack_2x.png";

function emptyFunction() {}
const link = window.location.href;

export const ShareLinkPage = () => {
  const { t } = useTranslation();
  const [successMessageShown, setSuccessMessageShown] = useState(false);
  const [failMessageShown, setFailMessageShown] = useState(false);

  const handleCopyButtonClick = useCallback(
    (url: string = window.location.href) => {
      copyUrl(url)
        .then(() => {
          setSuccessMessageShown(true);
          setTimeout(() => {
            setSuccessMessageShown(false);
          }, 1000 * 2);
        })
        .catch(() => {
          setFailMessageShown(true);
          setTimeout(() => {
            setFailMessageShown(false);
          }, 1000 * 2);
        });
    },
    []
  );

  const pageMainContent = (
    <div className="text-center flex flex-col w-full">
      <div className="mb-8 xs:mb-14 mx-auto">
        <img
          src={BackPackLogo}
          srcSet={`${BackPackLogo} 1x, ${BackPackLogo_2x} 2x`}
          alt={t("pages.share.logo")}
          className="mx-auto"
        />
      </div>

      <div className="mb-6">
        <TitleH1>Ура! Мероприятие успешно создано!</TitleH1>
      </div>

      <div className="mb-6">
        <TextBodyStandard>{t("pages.share.paragraph")}</TextBodyStandard>
      </div>

      <div className="mb-10 xs:mb-14 relative">
        <Input
          title={t("pages.share.title")}
          inputClassName="cursor-copy select-all"
          value={link}
          icon={<CopyIcon size={20} />}
          readonly
          onClick={handleCopyButtonClick}
          onChange={emptyFunction}
        />
        <div
          className={classesOf(
            "alert shadow-lg my-2 absolute",
            !successMessageShown && "hidden"
          )}
        >
          Link is copied
        </div>
        <div
          className={classesOf(
            "alert-warning shadow-lg my-2 absolute",
            !failMessageShown && "hidden"
          )}
        >
          Sorry, could not copy link. Please copy it manually.
        </div>
      </div>
    </div>
  );

  const pageFooter = <ActionPanel primaryButtonText={t("buttons.continue")} />;

  return <PageWrapper pageContent={pageMainContent} pageFooter={pageFooter} />;
};
