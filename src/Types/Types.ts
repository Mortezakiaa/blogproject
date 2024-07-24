import { ChangeEvent, KeyboardEvent } from "react";

export interface InputProps {
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
  onkeydown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  title: string;
  value: string;
}
export interface BlogCardProps {
  id: string | number;
  title: string;
  content: string;
}
