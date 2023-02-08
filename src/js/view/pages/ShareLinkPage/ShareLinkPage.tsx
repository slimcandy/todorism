import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Input, TextBodyStandard, TitleH1, ActionPanel } from "../../elements";
import { CopyIcon } from "../../icons/CopyIcon";
import { PageWrapper } from "../../components";
import { classesOf, shareOrCopyUrl } from "../../../utils";

import BackPackLogo from "./images/backpack.png";
import BackPackLogo_2x from "./images/backpack_2x.png";

function emptyFunction() {}
const link = window.location.href;

export function ShareLinkPage() {
  const { t } = useTranslation();
  const [successMessageShown, setSuccessMessageShown] = useState(false);
  const [failMessageShown, setFailMessageShown] = React.useState(false);

  const handleShareButtonClick = useCallback(
    (url: string = window.location.href) => {
      shareOrCopyUrl(url)
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

      <div className="mb-10 xs:mb-14">
        <div
          className={classesOf(
            "alert shadow-lg my-2",
            !successMessageShown && "hidden"
          )}
        >
          Link is copied
        </div>
        <div
          className={classesOf(
            "alert-warning shadow-lg my-2",
            !failMessageShown && "hidden"
          )}
        >
          Sorry, could not copy link. Please copy manually.
        </div>
        <Input
          title={t("pages.share.title")}
          className="cursor-copy select-all"
          value={link}
          icon={<CopyIcon size={20} />}
          readonly
          onClick={handleShareButtonClick}
          onChange={emptyFunction}
        />
      </div>
    </div>
  );

  const pageFooter = <ActionPanel primaryButtonText={t("buttons.continue")} />;

  return <PageWrapper pageContent={pageMainContent} pageFooter={pageFooter} />;
}
