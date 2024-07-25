import { BlogCardProps } from "@/Types/Types";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useDetailsBlog(id: string) {
  const router = useRouter();
  const [blogData, setBlogData] = useState<BlogCardProps>();

  const getBlogDetail = async () => {
    const res = await axios.get(`/api/blog/${id}`);
    const data = await res.data.data;
    if (res.data.success) {
      return setBlogData(res.data.data);
    }
    return toast.error(data.data);
  };

  const EditBlog = () => {
    router.push(`/addblog/${id}`);
  };

  const DeleteBlog = async () => {
    const res = await axios.delete(`/api/blog/${id}`);
    router.replace("/");
  };

  useEffect(() => {
    getBlogDetail();
  }, []);

  return { blogData, DeleteBlog, EditBlog };
}
