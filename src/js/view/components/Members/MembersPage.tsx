import React from "react";
import { useTranslation } from "react-i18next";
import { TitleH1 } from "../../elements";
import { MembersList } from "./MembersList";

export const MembersPage = () => {
  const { t } = useTranslation();
  const membersList = [
    {
      "member_uid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "name": "Anna",
    },
    {
      "member_uid": "3fa85f64-5717-4562-b3fc-2c963f66agr8",
      "name": "Max",
    },
    {
      "member_uid": "3fa85f64-5717-4562-b3fc-2c78fdkuhe82",
      "name": "Alex",
    }
  ];

  return (
    <div
      className="members-page
   flex flex-col min-h-screen
    px-4 pt-14 pb-6
    sm:w-6/12
    w-full
    mx-auto"
    >
      <TitleH1>{t("pages.members.add_members")}</TitleH1>
      <MembersList list={membersList} />
    </div>
  );
};
