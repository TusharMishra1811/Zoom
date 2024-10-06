"use client";

import { useGetCalls } from "@/hooks/useGetCalls";
import { getCurrentDateForUpcomingMeeting } from "@/lib/getCurrentTimeAndDate";
import React from "react";

const UpcomingMeetingTiming = () => {
  const { upcomingCalls } = useGetCalls();
  if (!upcomingCalls) {
    return (
      <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
        No Upcoming meetings
      </h2>
    );
  }
  const upcomingMeetingTimings = upcomingCalls?.map((call) =>
    call.state.startsAt?.toLocaleString()
  );
  const currentDay = getCurrentDateForUpcomingMeeting();

  return (
    <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
      {currentDay === upcomingMeetingTimings.sort()[0]?.split(",")[0]
        ? `Upcoming Meeting at : ${
            upcomingMeetingTimings.sort()[0]?.split(",")[1]
          }`
        : "No Upcoming meetings Today"}
    </h2>
  );
};

export default UpcomingMeetingTiming;
