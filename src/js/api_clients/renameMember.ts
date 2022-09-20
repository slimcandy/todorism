// import { IMember } from "../view/components/Members/IMember";
// import { ErrorResponse } from "../interfaces";
//
// export const renameMembers = async (
//   member: IMember
// ): Promise<IMember | undefined> => {
//   const response = await fetch(
//     `https://tracking-organizer.herokuapp.com/Trip/${
//       member.trip_uid as string
//     }/Members/RenameMember`,
//     {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         member_uid: member.member_uid,
//         name: member.name,
//       }),
//     }
//   );
//   if (response.ok) {
//     const json: { member_uid: string; name: string } = await response.json();
//     return json;
//   }
//   const errorResponse = (await response.json()) as ErrorResponse;
//   let errorMessage = "";
//   errorResponse.detail.forEach((error) => {
//     errorMessage += `${error.msg}. \n`;
//   });
//   console.error(errorMessage);
//
//   return undefined;
// };
