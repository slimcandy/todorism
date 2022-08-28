import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MembersList } from "./MembersList";
import { ButtonCircle, Input, TitleH1 } from "../../elements";
import { DoneIcon, PlusIcon } from "../../icons";

export const MembersPage = () => {
  const { t } = useTranslation();

  const [editingMemberName, setEditingMemberName] = useState<string>("");
  const [editingMember, setEditingMember] = useState<{
    name: string;
    member_uid: string;
  }>({
    name: "",
    member_uid: "",
  });
  const [deletingMember, setDeletingMember] = useState<{
    name: string;
    member_uid: string;
  }>({
    name: "",
    member_uid: "",
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const membersList = [
    {
      member_uid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      name: "Anna",
    },
    {
      member_uid: "3fa85f64-5717-4562-b3fc-2c963f66agr8",
      name: "Max",
    },
    {
      member_uid: "3fa85f64-5717-4562-b3fc-2c78fdkuhe82",
      name: "Alex",
    },
  ];
  const [list, setList] =
    useState<Array<{ name: string; member_uid: string }>>(membersList);

  const onRemoveMemberFromList = () => {
    const newList = list.filter(
      (m) => m.member_uid !== deletingMember.member_uid
    );
    setList(newList);
  };

  function onAddMember() {
    /*        membersList.push({
                "member_uid": editingMember.member_uid,
                "name": editingMember.name
            });
            await fetch(`https://tracking-organizer.herokuapp.com/Trip/${trip_uid}/Members/AddMembers`,
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "member_uid": editingMember.member_uid,
                        "name": editingMember.name
                    })
                });
            return undefined; */
    setList([...list, ...[{ name: editingMemberName, member_uid: "test" }]]);
  }

  const onSubmitEdit = () => {
    const newList = list.map((m) =>
      m.member_uid === editingMember.member_uid
        ? { ...m, name: editingMemberName }
        : m
    );
    setList(newList);
    setIsEditing(false);
  };

  useEffect(() => {
    setList(list);
  }, [isEditing]);

  useEffect(() => {
    onRemoveMemberFromList();
  }, [deletingMember, onRemoveMemberFromList]);

  return (
    <div
      className="members-page
   flex flex-col min-h-screen
    justify-between
    px-4 pt-14 pb-6
    sm:w-6/12
    w-full
    mx-auto"
    >
      <div>
        <TitleH1>{t("pages.members.add_members")}</TitleH1>
        <MembersList
          list={list}
          onEdit={setEditingMember}
          onEditClick={setIsEditing}
          onDelete={setDeletingMember}
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="mr-6 w-full">
          <Input
            value={isEditing ? editingMember.name : ""}
            placeholder="ещё участник"
            onChange={setEditingMemberName}
          />
        </div>
        {isEditing && (
          <ButtonCircle
            icon={<DoneIcon size={24} />}
            onClick={() => onSubmitEdit()}
          />
        )}
        {!isEditing && (
          <ButtonCircle
            icon={<PlusIcon size={24} />}
            onClick={() => onAddMember()}
          />
        )}
      </div>
    </div>
  );
};
