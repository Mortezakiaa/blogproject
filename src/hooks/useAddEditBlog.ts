import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSingleBlog, patchBlog, saveBlog } from "@/utils/Api";

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
    const data = await saveBlog(blogData);
    if (!data.success) return toast.error("something went wrong!!!");
    toast.success(data.data);
    setBlogData({ title: "", content: "" });
  };

  const editBlog = async () => {
    const data = await patchBlog(id as string, blogData);
    if (data.success) {
      toast.success(data.data);
      return router.replace("/");
    }
    return toast.error(data);
  };

  const getBlog = async () => {
    setLoading(true);
    const data = await getSingleBlog(id as string);
    if (data.success) {
      setLoading(false);
      setBlogData({
        title: data.data.title,
        content: data.data.content,
        ...(id && { _id: data.data._id }),
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
