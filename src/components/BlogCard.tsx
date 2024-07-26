"use client";
import { BlogCardProps } from "@/Types/Types";
import Link from "next/link";

const BlogCard: React.FC<BlogCardProps> = ({ title, content, _id }) => {
  return (
    <Link
      href={`blog/${_id}`}
      className="w-[300px] p-6 border group border-gray-200 rounded-lg shadow transition-all hover:bg-gray-100 bg-[#0284c7]"
    >
      <h5 className="mb-2 truncate text-2xl font-bold tracking-tight text-white group-hover:text-slate-800">
        {title}
      </h5>
      <p className="font-normal text-gray-200 group-hover:text-slate-700 truncate">
        {content}
      </p>
    </Link>
  );
};

export default BlogCard;
