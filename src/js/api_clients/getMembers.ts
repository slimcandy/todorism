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
