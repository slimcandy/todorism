import React from "react";
import { useTranslation } from "react-i18next";
import { Accordion, TextBodyStandard, TitleH1 } from "../../elements";
import { faqContent, IFaqContent } from "./content";

export const FaqPage = () => {
  const { t } = useTranslation();

  const localePath = "pages.faq";

  const getContent = (content: IFaqContent) => {
    const path = `${localePath}.content`;
    return (
      <Accordion title={t(`${path}.${content.id}.title`)}>
        <div>
          {content.values.map((v) =>
            v.type === "text" ? (
              <>
                <TextBodyStandard>
                  {t(`${path}.${content.id}.values.${v.value}`)}
                </TextBodyStandard>
                <br />
              </>
            ) : (
              <img className="my-2" src={v.value} alt={v.value} />
            )
          )}
        </div>
      </Accordion>
    );
  };

  return (
    <div className="flex flex-col w-full gap-y-6">
      <TitleH1>{t(`${localePath}.title`)}</TitleH1>

      <ul className="flex flex-col gap-y-5">
        {faqContent.map((content) => getContent(content))}
      </ul>
    </div>
  );
};
