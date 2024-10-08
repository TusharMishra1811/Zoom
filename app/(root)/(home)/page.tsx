import DisplayCurrentTime from "@/components/DisplayCurrentTime";
import MeetingTypeList from "@/components/MeetingTypeList";
import UpcomingMeetingTiming from "@/components/UpcomingMeetingTiming";
import { getCurrentDate } from "@/lib/getCurrentTimeAndDate";

const Home = () => {
  const date = getCurrentDate();

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <UpcomingMeetingTiming />
          <div className="flex flex-col gap-2">
            <DisplayCurrentTime />
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
