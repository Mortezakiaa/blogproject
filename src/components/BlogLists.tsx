"use client";
import useGetAllBlogs from "@/hooks/useGetAllBlogs";
import BlogCard from "./BlogCard";
import { BlogCardProps } from "@/Types/Types";
import SpinnerLoader from "./SpinnerLoader";

export default function BlogLists() {
  const { blogs, loading } = useGetAllBlogs();
  return (
    <>
      {loading && <SpinnerLoader />}
      {blogs?.map((i: BlogCardProps) => (
        <BlogCard _id={i._id} content={i.content} title={i.title} key={i._id} />
      ))}
    </>
  );
}
