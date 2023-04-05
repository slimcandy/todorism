import { SERVER_URL } from "../common/constants";

export const getMembers = async (eventUid: string) => {
  const response = await fetch(`${SERVER_URL}/Trip/${eventUid}/Members`);
  if (response.ok) {
    const json: [{ name: string; member_uid: string }] =
      (await response.json()) as [{ name: string; member_uid: string }];
    return json;
  }
  return [];
};

export const deleteMember = async (
  eventUid: string,
  memberUid: string
): Promise<void> => {
  await fetch(`${SERVER_URL}/Trip/${eventUid}/Members/${memberUid}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .catch(() => {});
};

export const renameMember = async (
  eventUid: string,
  memberUid: string,
  memberName: string
): Promise<Response> => {
  const res = await fetch(
    `${SERVER_URL}/Trip/${eventUid}/Members/RenameMember`,
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
  );
  return res;
};

export const addMember = async (
  eventUid: string,
  memberName: string
): Promise<Response> => {
  const response = await fetch(
    `${SERVER_URL}/Trip/${eventUid}/Members/AddMember`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        member_uid: null,
        name: memberName,
      }),
    }
  );
  return response;
};
