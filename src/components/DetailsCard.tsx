import { BlogDetailsCardProps } from "@/Types/Types";
import React from "react";

export default function DetailsCard({
  title,
  content,
  EditBlog,
  DeleteBlog,
}: BlogDetailsCardProps) {
  return (
    <div className="w-full max-w-lg px-10 py-8 mx-auto rounded-lg shadow-xl bg-[#9ca3af]">
      <div className="max-w-md mx-auto space-y-6">
        <h2 className="text-2xl text-white font-bold">{title}</h2>
        <p
          className="font-normal text-slate-200"
          style={{ wordWrap: "break-word" }}
        >
          {content}
        </p>
        <div className="flex gap-2 items-center mt-2">
          <button
            onClick={EditBlog}
            type="button"
            className="border border-blue-500 text-white font-bold px-3 py-1 rounded"
          >
            Edit
          </button>
          <button
            onClick={DeleteBlog}
            type="button"
            className="border border-red-500 text-white font-bold px-3 py-1 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
