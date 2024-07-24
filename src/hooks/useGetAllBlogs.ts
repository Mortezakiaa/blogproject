import axios from "axios";
import { useEffect, useState } from "react";

export default function useGetAllBlogs() {
  const [blogs, setBlogs] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const getAllBlogs = async () => {
    setLoading(true);
    const res = await axios.get("/api/blog");
    if (res.status == 200) {
      setLoading(false);
      setBlogs(res.data.data);
    } else {
      setLoading(false);
      setBlogs([]);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  return { blogs, loading };
}
