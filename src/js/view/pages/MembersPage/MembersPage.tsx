import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Await, useLoaderData, useNavigate } from "react-router-dom";
import { MembersEditList, PageWrapper } from "../../components";
import {
  ActionPanel,
  ButtonCircle,
  Input,
  Loader,
  TitleH1,
} from "../../elements";
import { DoneIcon, PlusIcon } from "../../icons";
import { IAccessIds, IEvent, IMember } from "../../../interfaces";
import { addMember, deleteMember, renameMember } from "../../../api_clients";
import { TEventWelcomePage } from "../../../../router/types";
import { eventRecommendedListPointsPageUrl } from "../../../../router/constants";

export const MembersPage = () => {
  const routeData = useLoaderData() as TEventWelcomePage;

  const { t } = useTranslation();

  const navigate = useNavigate();

  const [event, setEvent] = useState<IEvent>();

  const [eventUid, setEventUid] = useState<string>("");

  const [accessIds, setAccessIds] = useState<IAccessIds>();

  const editingMemberBlank: IMember = { name: "", member_uid: "" };

  const isNewEvent = event?.isNewEvent;

  const [editingMember, setEditingMember] =
    useState<IMember>(editingMemberBlank);

  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const [list, setList] = useState<Array<IMember>>([]);

  const [isFocusedInput, setIsFocusedInput] = useState(false);

  const clearEditingMember = () => setEditingMember(editingMemberBlank);

  const onRemoveMemberFromList = (member: IMember) => {
    try {
      if (!member.member_uid) return;

      deleteMember(eventUid, member.member_uid)
        .then(() => {
          const newList = list.filter(
            (m) => m.member_uid !== member.member_uid
          );
          setList(newList);
        })
        .catch(() => {});
    } finally {
      setIsDeleting(false);
      clearEditingMember();
    }
  };

  async function onAddMember() {
    try {
      if (!editingMember.name) return;

      await addMember(eventUid, editingMember.name)
        .then((response) => response.json())
        .then((data: IMember) => {
          if (data) {
            setList([...list, data]);
          }
        })
        .catch(() => {});
    } finally {
      clearEditingMember();
      setIsFocusedInput(false);
    }
  }

  const onSubmitEdit = async () => {
    try {
      if (
        list.find(
          (member) =>
            member.member_uid === editingMember.member_uid &&
            member.name === editingMember.name
        )
      ) {
        return;
      }
      await renameMember(eventUid, editingMember.member_uid, editingMember.name)
        .then((response) => response.json())
        .then((data: IMember) => {
          if (data) {
            const newList = list.map((m) =>
              m.member_uid === editingMember.member_uid
                ? { ...m, name: editingMember.name }
                : m
            );
            setList(newList);
          }
        })
        .catch(() => {});
    } finally {
      clearEditingMember();
      setIsFocusedInput(false);
    }
  };

  const pageFooter = (
    <div className="flex flex-col sticky bottom-0 bg-light-4 dark:bg-black-0">
      <div className="flex items-center justify-between py-2">
        <div className="mr-6 w-full">
          <Input
            value={!isDeleting ? editingMember.name : ""}
            placeholder={t("pages.members.input_placeholder")}
            onChange={(name) => {
              setEditingMember({ ...editingMember, name });
            }}
            isFocused={isFocusedInput}
          />
        </div>
        {editingMember.member_uid && !isDeleting ? (
          <ButtonCircle
            icon={<DoneIcon size={24} />}
            onClick={() => {
              void onSubmitEdit();
            }}
            disabled={!editingMember.name}
          />
        ) : (
          <ButtonCircle
            type="submit"
            icon={<PlusIcon size={24} />}
            onClick={() => {
              void onAddMember();
            }}
          />
        )}
      </div>

      <ActionPanel
        primaryButtonText={t(`buttons.${isNewEvent ? "next" : "done"}`)}
        primaryButtonType="submit"
        onPrimaryButtonClick={() => {
          if (isNewEvent && eventUid) {
            navigate(eventRecommendedListPointsPageUrl({ eventUid }));
          } else {
            navigate(-1);
          }
        }}
      />
    </div>
  );

  const pageMainContent = accessIds && (
    <div className="flex flex-col h-full w-full">
      <div>
        <TitleH1>
          {t(`pages.members.${isNewEvent ? "add_members" : "edit_members"}`)}
        </TitleH1>

        <div>
          <MembersEditList
            accessIds={accessIds}
            list={list}
            onEdit={setEditingMember}
            onFinishEdit={() => {}}
            onDelete={(member) => {
              setIsDeleting(true);
              setEditingMember(member);
              onRemoveMemberFromList(member);
            }}
            onFocusInput={setIsFocusedInput}
          />
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    if (routeData) {
      void routeData.data.then((d) => {
        setEvent(d.event);
        setEventUid(d.event.eventUid);
        setAccessIds(d.accessIds);
        setList(d.members);
      });
    }
  }, [routeData]);

  return (
    <React.Suspense fallback={<Loader />}>
      <Await
        resolve={routeData?.data}
        errorElement={<p>Error members page loading</p>}
      >
        <PageWrapper pageContent={pageMainContent} pageFooter={pageFooter} />
      </Await>
    </React.Suspense>
  );
};
