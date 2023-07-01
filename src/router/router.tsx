import { createBrowserRouter, defer, redirect } from "react-router-dom";
import React from "react";
import { EventsPage } from "../js/view/components/Events/EventsPage";
import {
  deleteCurrentEventFromLocalStorage,
  getEventAccessIds,
  getUserNameFromLocalStorage,
  saveListPointTypeInLocalStorage,
} from "../js/utils/localStorage";
import { WelcomePage } from "../js/view/components/WelcomePage/WelcomePage";
import { EventEditPage, EventWelcomePage, FaqPage } from "../js/view/pages";
import { EventPage } from "../js/view/pages/EventPage/EventPage";
import { ListPointEditPage } from "../js/view/pages/ListPointEditPage/ListPointEditPage";
import { MembersPage } from "../js/view/pages/MembersPage";
import {
  RecommendedListPointEditPage,
  RecommendedListPointsPage,
} from "../js/view/pages/recommended";
import { ShareLinkPage } from "../js/view/pages/ShareLinkPage/ShareLinkPage";
import { App } from "../js/view/components/App/App";
import { deleteLocalEvent, provideEvent, provideMembers } from "./utils";
import { eventWelcomePageUrl, homePageUrl, welcomePageUrl } from "./constants";

const deferEvent = ({ eventUid = "" }: { eventUid: string | undefined }) => {
  const accessIds = getEventAccessIds(eventUid);

  if (!accessIds?.memberUid) {
    return redirect(eventWelcomePageUrl({ eventUid }));
  }

  return defer({
    data: provideEvent({ eventUid }),
  });
};

const deferMembers = ({
  eventUid = "",
  isWelcomePage,
}: {
  eventUid: string | undefined;
  isWelcomePage?: boolean;
}) => {
  const accessIds = getEventAccessIds(eventUid);

  if (!isWelcomePage && !accessIds?.memberUid) {
    return redirect(eventWelcomePageUrl({ eventUid }));
  }

  return defer({
    data: provideMembers({ eventUid }),
  });
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <EventsPage />,
        loader: () => {
          if (!getUserNameFromLocalStorage()) {
            return redirect(welcomePageUrl());
          }
          saveListPointTypeInLocalStorage("common");
          deleteCurrentEventFromLocalStorage();
          return null;
        },
      },
      {
        path: "welcome",
        element: <WelcomePage />,
        loader: () => {
          if (getUserNameFromLocalStorage()) {
            return redirect(homePageUrl());
          }
          saveListPointTypeInLocalStorage("common");
          return null;
        },
      },
      {
        path: "event",
        element: <EventEditPage />,
        loader: () => {
          deleteLocalEvent();
          saveListPointTypeInLocalStorage("common");

          return null;
        },
      },
      {
        path: "event/:eventUid",
        children: [
          {
            index: true,
            element: <EventPage />,
            loader: ({ params: { eventUid } }) => deferEvent({ eventUid }),
          },
          {
            path: "welcome",
            element: <EventWelcomePage />,
            loader: ({ params: { eventUid } }) =>
              deferMembers({ eventUid, isWelcomePage: true }),
          },
          {
            path: "item",
            children: [
              {
                index: true,
                element: <ListPointEditPage />,
                loader: ({ params: { eventUid } }) => deferEvent({ eventUid }),
              },
              {
                path: ":listPointUid",
                element: <ListPointEditPage />,
                loader: ({ params: { eventUid } }) => deferEvent({ eventUid }),
              },
            ],
          },
          {
            path: "edit",
            element: <EventEditPage />,
            loader: ({ params: { eventUid } }) => deferEvent({ eventUid }),
          },
          {
            path: "share",
            element: <ShareLinkPage />,
            loader: ({ params: { eventUid } }) => deferEvent({ eventUid }),
          },
          {
            path: "members",
            element: <MembersPage />,
            loader: ({ params: { eventUid } }) => deferMembers({ eventUid }),
          },
          {
            path: "recommended",
            children: [
              {
                index: true,
                element: <RecommendedListPointsPage />,
              },
              {
                path: "item",
                element: <RecommendedListPointEditPage />,
              },
              {
                path: "item/:index",
                element: <RecommendedListPointEditPage />,
              },
            ],
          },
        ],
      },
      {
        path: "help",
        element: <FaqPage />,
      },
      {
        path: "*",
        element: <div>Запрашиваемая страница не найдена</div>,
        index: true,
      },
    ],
  },
]);
