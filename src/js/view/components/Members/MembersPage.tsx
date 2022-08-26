import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ButtonCircle, Input, TitleH1 } from "../../elements";
import { DoneIcon, PlusIcon } from "../../icons";
import { MembersList } from "./MembersList";

export const MembersPage = () => {
  const { t } = useTranslation();

  const [editingMemberName, setEditingMemberName] = useState<string>("");
  const [editingMember, setEditingMember] = useState<{ name: string, member_uid: string }>({
    name: "",
    member_uid: ""
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [list, setList] = useState<Array<{ name: string, member_uid: string }>>([]);

  const membersList = [
    {
      member_uid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      name: "Anna"
    },
    {
      member_uid: "3fa85f64-5717-4562-b3fc-2c963f66agr8",
      name: "Max"
    },
    {
      member_uid: "3fa85f64-5717-4562-b3fc-2c78fdkuhe82",
      name: "Alex"
    }
  ];

  useEffect(() => {
    setList(membersList);
  }, []);

  // const [eventUid, setEventUid] = useState<null | string>("");
  let eventUid = "";
  let eventMemberUid = "";
  const getEventFromLocalStorage = () => {
    const json = window.localStorage.getItem("trip_objects");
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const arr = json !== null
      ? JSON.parse(json)
      : [eventUid];
    console.log("arr ", arr);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
    eventUid = arr[0].trip_uid;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unused-vars
    eventMemberUid = arr[0].member_uid;
    console.log("eventUid ", eventUid);
  };

// eslint-disable-next-line @typescript-eslint/naming-convention
  const trip_uid = eventUid ?? "";
  /*  const getAllMembers = async (): Promise<Response> => {
      const response = await fetch(`https://tracking-organizer.herokuapp.com/Trip/${trip_uid}/Members`);
      return response;
    }; */

  const [members] = useState({});

  useEffect(() => {
    console.log("members ", members);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    /*   void getEventFromLocalStorage().then(getAllMembers()
         .then(setMembers)) */
    getEventFromLocalStorage();
  }, []);


  async function onAddMember(): Promise<void> {
    membersList.push({
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
    return undefined;
  }

  const onSubmitEdit = () => {
    const newList = list.map((m) => (
      m.member_uid === editingMember.member_uid
        ? { ...m, name: editingMemberName }
        : m
    ));
    setList([...newList]);
    setIsEditing(false);
  };

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
        <MembersList list={list} onEdit={setEditingMember}
                     onEditClick={setIsEditing} />
        {/*        {list.map((member) => (
          <div className="mb-2">
            <MembersListItem
              key={member.member_uid}
              memberName={member.name}
              memberUid={member.member_uid}
              isMe={false}
              onEdit={setEditingMember}
              onEditClick={setIsEditing}
            />
          </div>
        ))} */}
      </div>
      <div className="flex items-center justify-between">
        <div className="mr-6 w-full">
          <Input value={isEditing ? editingMember.name : ""} placeholder="ещё участник" onChange={setEditingMemberName} />
        </div>
        {isEditing &&
          <ButtonCircle icon={<DoneIcon size={24} />}
                        onClick={() => onSubmitEdit()} />
        }
        {!isEditing &&
          <ButtonCircle icon={<PlusIcon size={24} />}
                        onClick={() => onAddMember} />
        }
      </div>
    </div>
  );
};
