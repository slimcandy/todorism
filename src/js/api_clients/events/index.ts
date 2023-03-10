import { SERVER_URL } from "../../common/constants";
import { IEvent, IEventFromBE } from "../../interfaces";
import { convertIEventFromBEToIEvent } from "../../utils";

const endPoint = (eventUid: string) => `${SERVER_URL}/Trip/${eventUid}`;

export const getEvent = async ({ eventUid }: { eventUid: string }) => {
  let data: null | IEvent = null;

  try {
    const response = await fetch(endPoint(eventUid), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    data = convertIEventFromBEToIEvent((await response.json()) as IEventFromBE);
  } catch (e) {
    console.error(e);
  }

  return data;
};
