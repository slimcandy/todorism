import React, { useEffect } from "react";
import axios from "axios";
import { EventListItem } from "./EventListItem";

export const EventList = () => {
/*  const getUserId = axios.post("/User/User?CreateUser", {
    "nickname": "testUser"
    // eslint-disable-next-line @typescript-eslint/no-shadow
  }).then((response) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.data;
  }).catch((err) => {
    console.error(err);
  }) */
  const getEvents = async () => axios.get(`https://tracking-organizer.herokuapp.com/Trip/3fa85f64-5717-4562-b3fc-2c963f66afa6/All`)
    .then((response)=>{
    console.log(response)
  }).catch((error) => {
    console.error(error)
  });

  useEffect(()=>{
    void getEvents();
  },[])

  return (<>
    <div className="mb-2">
      <EventListItem tripUid="id0" title="title" />
    </div>
    <div className="mb-2">
      <EventListItem tripUid="id1" title="title" />
    </div>
    <div className="mb-2">
      <EventListItem tripUid="id2" title="title" />
    </div>
  </>);
};
