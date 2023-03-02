import React from "react";
import { ComponentStory } from "@storybook/react";
import {
  members,
  fullEvent,
  accessIds as accessIdsJson,
  convertIEventFromBEToIEvent,
} from "../../../utils";
import { EventWelcomePage } from "./EventWelcomePage";
import { IEventFromBE } from "../../../interfaces";
import {
  pushAccessIdsInLocalStorage,
  saveCurrentEventInLocalStorage,
  deleteEventMemberUidFromLocalStorage,
} from "../../../utils/localStorage";
import { SERVER_URL } from "../../../common/constants";

const event = convertIEventFromBEToIEvent(fullEvent as IEventFromBE);

const { eventUid } = event;

const accessIds = { ...accessIdsJson, eventUid };

const initialLocalStorageState = () => {
  saveCurrentEventInLocalStorage(event);
  pushAccessIdsInLocalStorage({ ...accessIds });
  return Promise.resolve({});
};

const initialLocalStorageStateForMemberSelection = () => {
  deleteEventMemberUidFromLocalStorage(eventUid);
  return Promise.resolve({});
};

const mockedApi = {
  getItems: {
    url: `${SERVER_URL}/Trip/${eventUid}/Members`,
    method: "GET",
    status: 200,
    response: members,
    delay: 700,
  },
};

export default {
  title: "pages/EventWelcomePage",
  component: EventWelcomePage,
  parameters: {
    mockData: Object.values(mockedApi),
  },
};

const Template: ComponentStory<typeof EventWelcomePage> = () => (
  <EventWelcomePage />
);

export const ChangeMember = Template.bind({});
ChangeMember.loaders = [() => initialLocalStorageState()];

export const ChooseMember = Template.bind({});
ChooseMember.loaders = [() => initialLocalStorageStateForMemberSelection()];
