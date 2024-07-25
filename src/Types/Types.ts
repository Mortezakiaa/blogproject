import { ChangeEvent, KeyboardEvent } from "react";

export interface InputProps {
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
  onkeydown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  title: string;
  value: string;
  type: "text" | "number";
  name: string;
}
export interface BlogCardProps {
  _id: string;
  title: string;
  content: string;
}

export type child = { children: React.ReactNode };

export type TParams = { params: { id: string } };
