import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";

export default function useAddEditBlog() {
  const [blogData, setBlogData] = useState({ title: "", content: "" });

  const changeHandler = (e: any) => {
    const ev = e.target;
    setBlogData({ ...blogData, [ev.name]: ev.value });
  };

  const addNewBlog = async () => {
    if (!blogData.title) return toast.error("title cannot be blank!!");
    if (!blogData.content) return toast.error("content cannot be blank");
    const res = await axios.post("/api/blog", blogData);
    const data = await res.data;
    if (!data.success) return toast.error("something went wrong!!!");
    toast.success(data.data);
    setBlogData({ title: "", content: "" });
  };

  return { blogData, changeHandler, addNewBlog };
}
