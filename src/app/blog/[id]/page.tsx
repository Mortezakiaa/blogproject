"use client";

import BlogCard from "@/components/BlogCard";
import useDetailsBlog from "@/hooks/useDetailsBlog";
import { TParams } from "@/Types/Types";

export default function page({ params: { id } }: TParams) {
  const { DeleteBlog, EditBlog, blogData } = useDetailsBlog(id);

  return (
    <>
      {blogData && (
        <>
          <BlogCard
            _id={blogData._id}
            content={blogData.content}
            title={blogData.title}
          />
          <div className="flex gap-2 items-center mt-2">
            <button
              onClick={EditBlog}
              type="button"
              className="border border-blue-500 text-blue-500 font-bold px-3 py-1 rounded"
            >
              Edit
            </button>
            <button
              onClick={DeleteBlog}
              type="button"
              className="border border-red-500 text-red-500 font-bold px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </>
  );
}
