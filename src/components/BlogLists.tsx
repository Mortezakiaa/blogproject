'use client'
import useGetAllBlogs from "@/hooks/useGetAllBlogs";
import BlogCard from "./BlogCard";
import { BlogCardProps } from "@/Types/Types";

export default function BlogLists() {
  const { blogs } = useGetAllBlogs();
  return (
    <>
      {blogs?.map((i:BlogCardProps) => (
        <BlogCard _id={i._id} content={i.content} title={i.title} key={i._id} />
      ))}
    </>
  );
}
