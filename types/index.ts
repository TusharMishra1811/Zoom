import { ReactNode } from "react";

export interface HomecardProps {
  className: string;
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
