import { ReactNode } from "react";

export interface HomecardProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick: () => void;
}

export type MeetingStateTypes =
  | "isScheduleMeeting"
  | "isJoiningMeeting"
  | "isInstantMeeting"
  | undefined;

export interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: ReactNode;
  handleClick?: () => void;
  buttonText?: string;
  image?: string;
  buttonIcon?: string;
}

export type CallLayoutType = "grid" | "speaker-left" | "speaker-right";

export type CallListPropsTypes = "ended" | "upcoming" | "recordings";

export interface MeetingCardProps {
  title: string;
  date: string;
  icon: string;
  isPreviousMeeting?: boolean;
  buttonIcon1?: string;
  buttonText?: string;
  handleClick: () => void;
  link: string;
}

export interface PermissionCardProps {
  title: string;
  iconUrl?: string;
}
