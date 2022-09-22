import { IMember } from "../view/components/Members/IMember";

export const getMembers = async (tripUid: string) => {
  const response = await fetch(
    `https://tracking-organizer.herokuapp.com/Trip/${tripUid}/Members`
  );
  if (response.ok) {
    const json: [{ name: string; member_uid: string }] =
      (await response.json()) as [{ name: string; member_uid: string }];
    return json;
  }
  return [];
};

export const deleteMember = async (
  tripUid: string,
  memberUid: string
): Promise<void> => {
  await fetch(
    `https://tracking-organizer.herokuapp.com/Trip/${tripUid}/Members/${memberUid}`,
    { method: "DELETE" }
  )
    .then((response) => response.json())
    .catch(() => {});
};

export const renameMember = async (
  tripUid: string,
  memberUid: string,
  memberName: string
): Promise<IMember> => {
  await fetch(
    `https://tracking-organizer.herokuapp.com/Trip/${tripUid}/Members/RenameMember`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        member_uid: memberUid,
        name: memberName,
      }),
    }
  )
    .then((response) => response.json())
    .then((data: IMember) => data)
    .catch(() => {});
};
