"use client";

import { getCurrentTime } from "@/lib/getCurrentTimeAndDate";
import React, { useEffect, useState } from "react";

const DisplayCurrentTime = () => {
  const [time, setTime] = useState(getCurrentTime());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getCurrentTime);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>;
};

export default DisplayCurrentTime;
