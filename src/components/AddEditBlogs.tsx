"use client";
import useAddEditBlog from "@/hooks/useAddEditBlog";
import Input from "./Input";
import SpinnerLoader from "./SpinnerLoader";

type T = { id?: string };

export default function AddEditBlogs({ id }: T) {
  const { addNewBlog, blogData, changeHandler, editBlog, loading } =
    useAddEditBlog(id);

  return (
    <>
      {loading && <SpinnerLoader />}
      <div>
        <Input
          name="title"
          type="text"
          onchange={changeHandler}
          title="title"
          value={blogData.title}
        />
        <Input
          name="content"
          type="text"
          onchange={changeHandler}
          title="content"
          value={blogData.content}
        />
        <div className="flex gap-2 items-center mt-2">
          <button
            onClick={id ? editBlog : addNewBlog}
            type="button"
            className="border border-blue-500 text-blue-500 font-bold px-3 py-1 rounded"
          >
            {id ? "Edit" : "Add"}
          </button>
        </div>
      </div>
    </>
  );
}
