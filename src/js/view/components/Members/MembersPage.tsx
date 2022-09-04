import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {MembersList} from "./MembersList";
import {ButtonCircle, ButtonPrimary, Input, TitleH1} from "../../elements";
import {DoneIcon, PlusIcon} from "../../icons";
import {localStorageCurrentEventObject} from "../../../common/constants";
import {pullLocalStorage} from "../../../utils/localStorage";
import {IMember} from "./IMember";

export const MembersPage = () => {
    const {t} = useTranslation();
    const [currEvent, setCurrEvent] = useState<{
        trip_uid: string;
        member_uid: string;
    } | null>(null);
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

    const [list, setList] = useState<Array<{ name: string; member_uid: string }>>(
        []
    );

    const onRemoveMemberFromList = () => {
        if (!currEvent) return;
        fetch(
            `https://tracking-organizer.herokuapp.com/Trip/${currEvent.trip_uid}/Members/${deletingMember.member_uid}`,
            {method: "DELETE"}
        )
            .then((response) => response.json())
            .then(() => {
                const newList = list.filter(
                    (m) => m.member_uid !== deletingMember.member_uid
                );
                setList(newList);
            })
            .catch(() => {
            });
    };

    function onAddMember() {
        if (!currEvent) return;
        fetch(
            `https://tracking-organizer.herokuapp.com/Trip/${currEvent.trip_uid}/Members/AddMember`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    member_uid: null,
                    name: editingMemberName,
                }),
            }
        )
            .then((response) => response.json())
            .then((data: IMember) => {
                if (data) {
                    setEditingMember({name: "", member_uid: ""})
                    setList([...list, data]);
                    setIsEditing(false);
                }
            })
            .catch(() => {
            });
    }

    const [isFocusedInput, setIsFocusedInput] = useState(false)

    const onSubmitEdit = () => {
        const newList = list.map((m) =>
            m.member_uid === editingMember.member_uid
                ? {...m, name: editingMemberName}
                : m
        );
        setList(newList);
        setIsEditing(false);
    };

    const getCurrEvent = async () => {
        await pullLocalStorage(localStorageCurrentEventObject).then((res) => {
            if (res === null) return;
            const parsedItem: { trip_uid: string; member_uid: string } = JSON.parse(
                res
            ) as { trip_uid: string; member_uid: string };
            setCurrEvent(parsedItem);
        });
    };

    const getMembers = async () => {
        if (currEvent === null) return;
        const response = await fetch(
            `https://tracking-organizer.herokuapp.com/Trip/${currEvent.trip_uid}/Members`
        );
        if (response.ok) {
            const json: [{ name: string; member_uid: string }] =
                (await response.json()) as [{ name: string; member_uid: string }];
            setList([...list, ...json]);
        }
    };

    useEffect(() => {
        void getCurrEvent();
    }, []);

    useEffect(() => {
        void getMembers();
    }, [currEvent]);

    useEffect(() => {
        setList(list);
    }, [isEditing]);

    useEffect(() => {
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
                    <MembersList
                        list={list}
                        onEdit={setEditingMember}
                        onFinishEdit={setIsEditing}
                        onDelete={setDeletingMember}
                        onFocusInput={setIsFocusedInput}
                    />
                </div>
            </div>
            <div className="sticky bottom-0 left-0 pb-6 bg-light-4 dark:bg-dark-0 w-full">
                <div className="flex items-center justify-between mb-6 pt-2">
                    <div className="mr-6 w-full">
                        <Input value={isEditing ? editingMember.name : ""}
                               placeholder={t("pages.members.input_placeholder")}
                               onChange={setEditingMemberName}
                               isFocused={isFocusedInput}
                        />
                    </div>
                    {isEditing && (
                        <ButtonCircle
                            icon={<DoneIcon size={24}/>}
                            onClick={() => onSubmitEdit()}
                        />
                    )}
                    {!isEditing && (
                        <ButtonCircle
                            icon={<PlusIcon size={24}/>}
                            onClick={() => onAddMember()}
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
