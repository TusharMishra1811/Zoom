"use client";

import { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";
import { HomeCardsData } from "@/constants";
import { MeetingStateTypes } from "@/types";
import MeetingModal from "./MeetingModal";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useToast } from "@/hooks/use-toast";

const MeetingTypeList = () => {
  const { toast } = useToast();
  const [meetingState, setMeetingState] = useState<MeetingStateTypes>();
  const [values, setValues] = useState({
    dateTime: new Date(),
    description: "",
    link: "",
  });
  const [callDetails, setCallDetails] = useState<Call>();
  const router = useRouter();
  const { user } = useUser();
  const client = useStreamVideoClient();
  const createMeeting = async () => {
    if (!client || !user) {
      return;
    }

    try {
      if (!values.dateTime) {
        toast({ title: "Please select a date and a time" });
        return;
      }

      const id = crypto.randomUUID();
      const call = client.call("default", id);
      if (!call) {
        throw new Error("Failed to create call");
      }
      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || "Instant Meeting";

      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });

      setCallDetails(call);

      if (!values.description) {
        router.push(`/meeting/${call.id}`);
      }
      toast({ title: "Meeting Created" });
    } catch (error) {
      console.log(error);
      toast({
        title: "Failed to create meeting",
      });
    }
  };
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {HomeCardsData.map((cardData, index) => {
        // const { img, title, description, className, actions } = cardData;

        return (
          <HomeCard
            key={index}
            img={cardData.img}
            title={cardData.title}
            description={cardData.description}
            className={cardData.className}
            handleClick={() =>
              cardData.title === "View Recordings"
                ? router.push(cardData.actions)
                : setMeetingState(cardData.actions as MeetingStateTypes)
            }
          />
        );
      })}
      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </section>
  );
};

export default MeetingTypeList;
