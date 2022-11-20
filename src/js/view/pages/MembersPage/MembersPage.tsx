import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { MembersList } from "../../components/Members/MembersList";
import { ActionPanel, ButtonCircle, Input, TitleH1 } from "../../elements";
import { DoneIcon, PlusIcon } from "../../icons";
import { IMember } from "../../../interfaces";
import { PageWrapper } from "../../components";
import {
  addMember,
  deleteMember,
  getMembers,
  renameMember,
} from "../../../api_clients/api_members";

export const MembersPage = () => {
  const { t } = useTranslation();

  const editingMemberBlank: IMember = { name: "", member_uid: "" };

  const { eventUid = "" } = useParams();

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
    <div className="sticky bottom-0">
      <div className="pb-6 w-full">
        <div className="flex items-center justify-between mb-6 pt-2">
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
      </div>

      <ActionPanel
        primaryButtonText={t("buttons.next")}
        primaryButtonType="submit"
      />
    </div>
  );

  const pageMainContent = (
    <div className="flex flex-col h-full w-full">
      <div>
        <TitleH1>{t("pages.members.add_members")}</TitleH1>

        <div className="grid gap-y-2 grid-cols-1">
          <MembersList
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
    if (eventUid) {
      getMembers(eventUid)
        .then((data) => {
          setList([...data]);
        })
        .catch(() => {});
    }
  }, [eventUid]);

  return <PageWrapper pageContent={pageMainContent} pageFooter={pageFooter} />;
};
