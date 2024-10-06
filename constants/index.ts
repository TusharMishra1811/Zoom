export const sidebarLinks = [
  {
    label: "Home",
    route: "/",
    imgUrl: "/icons/Home.svg",
  },
  {
    label: "Upcoming",
    route: "/upcoming",
    imgUrl: "/icons/upcoming.svg",
  },
  {
    label: "Previous",
    route: "/previous",
    imgUrl: "/icons/previous.svg",
  },
  {
    label: "Recordings",
    route: "/recordings",
    imgUrl: "/icons/Video.svg",
  },
  {
    label: "Personal Room",
    route: "/personal-room",
    imgUrl: "/icons/add-personal.svg",
  },
];

export const HomeCardsData = [
  {
    img: "/icons/add-meeting.svg",
    title: "New Meeting",
    description: "Start an instant meeting",
    className: "orange-1",
    actions: "isInstantMeeting",
  },
  {
    img: "/icons/join-meeting.svg",
    title: "Join Meeting",
    description: "via invitation link",
    className: "blue-1",
    actions: "isJoiningMeeting",
  },
  {
    img: "/icons/schedule.svg",
    title: "Schedule Meeting",
    description: "Plan your meeting",
    className: "purple-1",
    actions: "isScheduleMeeting",
  },
  {
    img: "/icons/recordings.svg",
    title: "View Recordings",
    description: "Meeting Recordings",
    className: "yellow-1",
    actions: "/recordings",
  },
];

export const MeetingRoomDropdownMenuItems = [
  "Grid",
  "Speaker-Left",
  "Speaker-Right",
];

export const avatarImages = [
  "/images/avatar-1.jpeg",
  "/images/avatar-2.jpeg",
  "/images/avatar-3.png",
  "/images/avatar-4.png",
  "/images/avatar-5.png",
];
