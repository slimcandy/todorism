import {
  createEventPageUrl,
  eventPageUrl,
  homePageUrl,
  eventMembersPageUrl,
  eventCreateListPointPageUrl,
  eventEditListPointPageUrl,
  eventWelcomePageUrl,
  editEventPageUrl,
  shareEventPageUrl,
  eventRecommendedListPointsPageUrl,
  eventCreateRecommendedListPointPageUrl,
  eventEditRecommendedListPointPageUrl,
} from "../../../../router/constants";
import { IHeaderRoute, IRouteState } from "./types";

export const getRoutesDataForHeader = ({
  eventUid = "",
  memberUid,
  isNewEvent,
  state,
}: {
  eventUid?: string;
  memberUid?: string;
  isNewEvent: boolean;
  state: IRouteState;
}): { [key: string]: IHeaderRoute } => ({
  // создание мероприятия
  [createEventPageUrl()]: {
    parentPathName: homePageUrl(),
    parentLocalePath: "eventsPage",
  },
  // редактирование мероприятия
  [editEventPageUrl({ eventUid })]: {
    parentPathName: eventPageUrl({ eventUid }),
    parentLocalePath: "goBack",
  },
  // страница мероприятия
  [eventPageUrl({ eventUid })]: {
    parentPathName: homePageUrl(),
    parentLocalePath: "eventsPage",
  },
  // участники мероприятия
  [eventWelcomePageUrl({ eventUid })]: {
    parentPathName: memberUid ? eventPageUrl({ eventUid }) : undefined,
    parentLocalePath: "goBack",
  },
  // создание вещи
  [eventCreateListPointPageUrl({ eventUid })]: {
    parentPathName: eventPageUrl({ eventUid }),
    parentLocalePath: `eventEditListPointPage.${state.listPointType || ""}`,
  },
  // редактирование вещи
  [eventEditListPointPageUrl({
    eventUid,
    listPointUid: state.listPointUid || "",
  })]: {
    parentPathName: eventPageUrl({ eventUid }),
    parentLocalePath: `eventEditListPointPage.${state.listPointType || ""}`,
  },
  // создание/редактирование участника
  [eventMembersPageUrl({ eventUid })]: {
    parentPathName: isNewEvent
      ? createEventPageUrl()
      : eventPageUrl({ eventUid }),
    parentLocalePath: isNewEvent ? "editEventPage" : "goBack",
  },
  // поделиться мероприятием
  [shareEventPageUrl({ eventUid })]: {
    parentPathName: isNewEvent
      ? eventRecommendedListPointsPageUrl({ eventUid })
      : eventPageUrl({ eventUid }),
    parentLocalePath: isNewEvent ? "recommendedListPointsPage" : "goBack",
  },
  // рекомендуемые вещи
  [eventRecommendedListPointsPageUrl({ eventUid })]: {
    parentPathName: eventMembersPageUrl({ eventUid }),
    parentLocalePath: "eventMembersPage",
  },
  // создание рекомендуемой вещи
  [eventCreateRecommendedListPointPageUrl({ eventUid })]: {
    parentPathName: eventRecommendedListPointsPageUrl({ eventUid }),
    parentLocalePath: "recommendedListPointsPage",
  },
  // редактирование рекомендуемой вещи
  [eventEditRecommendedListPointPageUrl({
    eventUid,
    index: state.listPointIndex || 0,
  })]: {
    parentPathName: eventRecommendedListPointsPageUrl({ eventUid }),
    parentLocalePath: "recommendedListPointsPage",
  },
});
