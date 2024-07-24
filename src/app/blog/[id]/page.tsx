"use client";

import BlogCard from "@/components/BlogCard";
import { BlogCardProps } from "@/Types/Types";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function page({ params: { id } }: { params: { id: string } }) {
  const [blogData, sesBlogData] = useState<BlogCardProps>();
  const getD = async () => {
    const res = await axios.get(`/api/blog/${id}`);
    sesBlogData(res.data.data);
  };

  const EditBlog = () => {};

  const DeleteBlog = async () => {
    const router = useRouter();
    const res = await axios.delete(`/api/blog/${id}`);
    console.log(res.data);
    router.replace("/");
  };

  useEffect(() => {
    getD();
  }, []);

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
              onClick={() => {}}
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
