import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MembersList } from "./MembersList";
import { ButtonCircle, ButtonPrimary, Input, TitleH1 } from "../../elements";
import { DoneIcon, PlusIcon } from "../../icons";
import { localStorageCurrentEventObject } from "../../../common/constants";
import { pullLocalStorage } from "../../../utils/localStorage";
import { IMember } from "./IMember";
import {
  addMember,
  deleteMember,
  getMembers,
  renameMember,
} from "../../../api_clients/api_members";
import { wrapAsyncFunction } from "../../../utils";
import { NewTripResponse } from "../../../interfaces";

export const MembersPage = () => {
  const { t } = useTranslation();
  const [currEvent, setCurrEvent] = useState<NewTripResponse>({
    trip_uid: "",
    member_uid: "",
  });
  const [editingMemberName, setEditingMemberName] = useState<string>("");
  const [editingMember, setEditingMember] = useState<IMember>({
    name: "",
    member_uid: "",
  });
  const [deletingMember, setDeletingMember] = useState<IMember>({
    name: "",
    member_uid: "",
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [list, setList] = useState<Array<IMember>>([]);
  const [isFocusedInput, setIsFocusedInput] = useState(false);

  const onRemoveMemberFromList = () => {
    deleteMember(currEvent.trip_uid, deletingMember.member_uid)
      .then(() => {
        const newList = list.filter(
          (m) => m.member_uid !== deletingMember.member_uid
        );
        setList(newList);
      })
      .catch(() => {});
  };

  async function onAddMember(tripUid: string) {
    setIsAdding(true);
    if (editingMemberName === "") return;
    await addMember(tripUid, editingMemberName)
      .then((response) => response.json())
      .then((data: IMember) => {
        if (data) {
          setList([...list, data]);
          setEditingMember({ name: "", member_uid: "" });
          setIsAdding(false);
          setIsFocusedInput(false);
        }
      })
      .catch(() => {});
  }

  const onSubmitEdit = async () => {
    if (
      list.filter((member) => member.member_uid === editingMember.member_uid)[0]
        .name === editingMemberName
    ) {
      setEditingMember({ name: "", member_uid: "" });
      setIsEditing(false);
      setIsFocusedInput(false);
      return;
    }
    await renameMember(
      currEvent.trip_uid,
      editingMember.member_uid,
      editingMemberName
    )
      .then((response) => response.json())
      .then((data: IMember) => {
        if (data) {
          const newList = list.map((m) =>
            m.member_uid === editingMember.member_uid
              ? { ...m, name: editingMemberName }
              : m
          );
          setList(newList);
          setEditingMember({ name: "", member_uid: "" });
          setIsEditing(false);
          setIsFocusedInput(false);
        }
      })
      .catch(() => {});
  };

  const getCurrEvent = async () => {
    await pullLocalStorage(localStorageCurrentEventObject)
      .then((res) => {
        if (res === null) return;
        const parsedItem: { trip_uid: string; member_uid: string } = JSON.parse(
          res
        ) as { trip_uid: string; member_uid: string };
        setCurrEvent(parsedItem);
      })
      .then(() => {})
      .catch(() => {});
  };

  useEffect(() => {
    void getCurrEvent();
  }, []);

  useEffect(() => {
    if (!currEvent.trip_uid || !currEvent.member_uid) return;
    getMembers(currEvent.trip_uid)
      .then((data) => {
        setList([...data]);
      })
      .catch(() => {});
  }, [currEvent]);

  useEffect(() => {
    setList(list);
  }, [isEditing]);

  useEffect(() => {
    if (!deletingMember.member_uid) return;
    onRemoveMemberFromList();
  }, [deletingMember]);

  return (
    <div
      className="members-page
   flex flex-col min-h-screen
    justify-between
    px-4 pt-14
    sm:w-6/12
    w-full
    mx-auto relative"
    >
      <div className="relative h-[calc(100vh-220px)] overflow-auto">
        <div className="absolute top-0 left-0 w-full">
          <div className="bg-light-4 dark:bg-dark-0 sticky top-0 z-10 w-full pb-6">
            <TitleH1>{t("pages.members.add_members")}</TitleH1>
          </div>
          <div className="grid gap-y-2 grid-cols-1">
            <MembersList
                list={list}
                onEdit={setEditingMember}
                onFinishEdit={setIsEditing}
                onDelete={setDeletingMember}
                onFocusInput={setIsFocusedInput}
            />
          </div>
        </div>
      </div>
      <div className="sticky bottom-0 left-0 pb-6 bg-light-4 dark:bg-dark-0 w-full">
        <div className="flex items-center justify-between mb-6 pt-2">
          <div className="mr-6 w-full">
            <Input
              isInputting={isEditing || isAdding}
              value={isEditing || isAdding ? editingMember.name : null}
              placeholder={t("pages.members.input_placeholder")}
              onChange={setEditingMemberName}
              isFocused={isFocusedInput}
            />
          </div>
          {isEditing && (
            <ButtonCircle
              icon={<DoneIcon size={24} />}
              onClick={wrapAsyncFunction(onSubmitEdit)}
              disabled={editingMemberName === ""}
            />
          )}
          {!isEditing && (
            <ButtonCircle
              type="submit"
              icon={<PlusIcon size={24} />}
              onClick={wrapAsyncFunction(() => onAddMember(currEvent.trip_uid))}
            />
          )}
        </div>
        <div className="px-7">
          <Link to="/">
            <ButtonPrimary>{t("buttons.next")}</ButtonPrimary>
          </Link>
        </div>
      </div>
    </div>
  );
};
