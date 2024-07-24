import axios from "axios";
import { useEffect, useState } from "react";

export default function useGetAllBlogs() {
  const [blogs, setBlogs] = useState<any>();
  const getAllBlogs = async () => {
    const res = await axios.get("/api/blog");
    setBlogs(res.data.data);
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  return { blogs };
}
