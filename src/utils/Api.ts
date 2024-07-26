import { BlogCardProps } from "@/Types/Types";
import axios from "axios";

export const getSingleBlog = async (id: string) => {
  const res = await axios.get(`/api/blog/${id}`);
  return res.data;
};

export const getAllBlogs = async () => {
  const res = await axios.get("/api/blog");
  return res.data;
};

export const patchBlog = async (
  id: string,
  Data: Omit<BlogCardProps, "_id">
) => {
  const res = await axios.patch(`/api/blog/${id}`, Data);
  return res.data;
};

export const deleteBlog = async (id: string) => {
  const res = await axios.delete(`/api/blog/${id}`);
  return res.data;
};

export const saveBlog = async (data: Omit<BlogCardProps, "_id">) => {
  const res = await axios.post("/api/blog", data);
  return res.data;
};
