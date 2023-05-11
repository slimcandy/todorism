import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Await, useLoaderData, useNavigate } from "react-router-dom";
import { IAccessIds, IEvent, IMember } from "../../../interfaces";
import { PageWrapper } from "../../components";
import {
  ActionPanel,
  EventTitle,
  Loader,
  MembersListItem,
  Radio,
  TextBodyLarge,
  TitleH1,
} from "../../elements";
import {
  pushAccessIdsInLocalStorage,
  saveUserNameInLocalStorage,
} from "../../../utils/localStorage";
import { useLoading } from "../../../hooks";
import { TEventWelcomePage } from "../../../../router/types";
import { eventPageUrl } from "../../../../router/constants";

export const EventWelcomePage = () => {
  const routeData = useLoaderData() as TEventWelcomePage;

  const { t } = useTranslation();

  const navigate = useNavigate();

  const { loading } = useLoading();

  const [event, setEvent] = useState<IEvent>();

  const [accessIds, setAccessIds] = useState<IAccessIds>();

  const [members, setMembers] = useState<Array<IMember>>([]);

  const [selectedMember, setSelectedMember] = useState<IMember>();

  const eventUid = event?.eventUid || "";

  const onChangeMember = (member: IMember) => {
    pushAccessIdsInLocalStorage({
      eventUid,
      memberUid: member.member_uid,
    });

    saveUserNameInLocalStorage(member.name);
  };

  const radioButton = (member: IMember) => (
    <Radio
      name={member.name}
      value={selectedMember?.member_uid === member.member_uid}
      onChange={() => setSelectedMember(member)}
    />
  );

  const membersListItemContent = (member: IMember) => (
    <div className="flex grow justify-end ml-2">{radioButton(member)}</div>
  );

  const pageMainContent = (
    <div className="w-full">
      <div className="flex flex-col gap-y-6">
        <TitleH1 className="text-white">
          {accessIds?.memberUid ? t("members") : t("welcome")}
        </TitleH1>

        {event && <EventTitle event={event} />}

        <TextBodyLarge>{t("pages.members.who_are_you")}</TextBodyLarge>
      </div>

      <div>
        {members.length > 0
          ? members.map((member) => (
              <MembersListItem key={member.member_uid} name={member.name}>
                {membersListItemContent(member)}
              </MembersListItem>
            ))
          : !loading && <div>{t("error")}</div>}
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

          if (accessIds?.memberUid) {
            navigate(-1);
          } else {
            navigate(eventPageUrl({ eventUid }), {
              replace: true,
            });
          }
        }
      }}
    />
  );

  useEffect(() => {
    if (routeData) {
      void routeData.data.then((d) => {
        setEvent(d.event);
        setAccessIds(d.accessIds);
        setMembers(d.members);

        const member = d.members.find(
          (m) => m.member_uid === d.accessIds?.memberUid
        );
        setSelectedMember(member);
      });
    }
  }, [routeData]);

  return (
    <React.Suspense fallback={<Loader />}>
      <Await
        resolve={routeData?.data}
        errorElement={<p>Error event welcome page loading</p>}
      >
        <PageWrapper
          pageContent={pageMainContent}
          pageFooter={pageFooter}
          verticalTopPageContent
        />
      </Await>
    </React.Suspense>
  );
};
