import {
  deleteBlog,
  getAllBlogs,
  getSingleBlog,
  patchBlog,
  saveBlog,
} from "@/utils/Api";
import axios, { AxiosResponse } from "axios";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("", () => {
  const mockData = { title: "sample", content: "sample test" };
  beforeEach(() => {
    mockedAxios.get.mockResolvedValue({ data: mockData } as AxiosResponse);
    mockedAxios.post.mockResolvedValue({ data: mockData } as AxiosResponse);
    mockedAxios.delete.mockResolvedValue({ data: mockData } as AxiosResponse);
    mockedAxios.patch.mockResolvedValue({ data: mockData } as AxiosResponse);
  });
  test("getAllBlogs", async () => {
    const res = await getAllBlogs();
    expect(res).toBe(mockData);
  });
  test("getSingleBlog", async () => {
    const res = await getSingleBlog("123");
    expect(res).toBe(mockData);
  });
  test("patchBlog", async () => {
    const res = await patchBlog("123", { content: "sample", title: "test" });
    expect(res).toBe(mockData);
  });
  test("delete blog ", async () => {
    const res = await deleteBlog("123");
    expect(res).toBe(mockData);
  });
  test("save post", async () => {
    const res = await saveBlog(mockData);
    expect(res).toBe(mockData);
  });
});
