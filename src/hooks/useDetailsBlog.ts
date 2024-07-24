import { BlogCardProps } from "@/Types/Types";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useDetailsBlog(id: string) {
  const router = useRouter();
  const [blogData, sesBlogData] = useState<BlogCardProps>();

  const getBlogDetail = async () => {
    const res = await axios.get(`/api/blog/${id}`);
    sesBlogData(res.data.data);
  };

  const EditBlog = () => {
    router.push(`/addblog/${id}`);
  };

  const DeleteBlog = async () => {
    const res = await axios.delete(`/api/blog/${id}`);
    console.log(res.data);
    router.replace("/");
  };

  useEffect(() => {
    getBlogDetail();
  }, []);

  return { blogData, DeleteBlog, EditBlog };
}
