import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IMember } from "../../../interfaces";
import { PageWrapper } from "../PageWrapper/PageWrapper";
import {
  ActionPanel,
  TitleH1,
  Radio,
  MembersListItem,
  TextBodyLarge,
} from "../../elements";
import { IWhoAreYouProps } from "./WhoAreYouProps";
import { EventTitle } from "../../elements/EventTitle/EventTitle";

export const WhoAreYou = (props: IWhoAreYouProps) => {
  const { members = [], event, isWelcomePage, onChangeMember } = props;

  const { t } = useTranslation();

  const [selectedMember, setSelectedMember] = useState<IMember>();

  const radioButton = (member: IMember) => (
    <Radio
      name={member.name}
      value={selectedMember?.member_uid === member.member_uid}
      onClick={() => setSelectedMember(member)}
    />
  );

  const pageMainContent = (
    <div className="w-full">
      <div className="flex flex-col gap-y-6">
        <TitleH1 className="text-white">
          {isWelcomePage ? t("welcome") : t("members")}
        </TitleH1>

        {isWelcomePage && <EventTitle event={event} />}

        <TextBodyLarge>{t("pages.members.who_are_you")}</TextBodyLarge>
      </div>

      <div>
        {members.length > 0 ? (
          members.map((member) => (
            <MembersListItem
              name={member.name}
              actionContent={radioButton(member)}
            />
          ))
        ) : (
          <div>{t("error")}</div>
        )}
      </div>
    </div>
  );

  const pageFooter = (
    <ActionPanel
      sticky
      primaryButtonText={t("buttons.done")}
      primaryButtonDisabled={!selectedMember}
      onPrimaryButtonClick={() => {
        if (selectedMember) {
          onChangeMember(selectedMember);
        }
      }}
    />
  );

  return (
    <PageWrapper
      pageContent={pageMainContent}
      pageFooter={pageFooter}
      verticalTopPageContent
    />
  );
};
