"use client";
import Input from "./Input";

export default function AddEditBlogs() {
  return (
    <div>
      <Input onchange={() => {}} title="title" value="" />
      <Input onchange={() => {}} title="content" value="" />
      <div className="flex gap-2 items-center mt-2">
        <button
          type="button"
          className="border border-blue-500 text-blue-500 font-bold px-3 py-1 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
}
