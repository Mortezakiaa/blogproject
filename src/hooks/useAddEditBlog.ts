import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function useAddEditBlog(id?: string) {
  const router = useRouter();
  const [blogData, setBlogData] = useState({ title: "", content: "" });
  const [loading, setLoading] = useState<boolean>(false);

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

  const editBlog = async () => {
    const res = await axios.patch(`/api/blog/${id}`, blogData);
    const data = await res.data.data;
    if (res.data.success) {
      toast.success(res.data.data);
      return router.replace("/");
    }
    return toast.error(data);
  };

  const getBlog = async () => {
    setLoading(true);
    const res = await axios.get(`/api/blog/${id}`);
    const data = await res.data.data;
    if (res.data.success) {
      setLoading(false);
      setBlogData({
        title: data.title,
        content: data.content,
        ...(id && { _id: data._id }),
      });
    } else {
      setLoading(false);
      toast.error(data.data);
    }
  };

  useEffect(() => {
    if (id) {
      getBlog();
    }
  }, []);

  return { blogData, changeHandler, addNewBlog, editBlog, loading };
}
