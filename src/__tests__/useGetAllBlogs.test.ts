import { renderHook } from "@testing-library/react";
import useGetAllBlogs from "@/hooks/useGetAllBlogs";

describe("", () => {
  test("before fetched data", async () => {
    const { result } = renderHook(() => useGetAllBlogs());
    expect(result.current.loading).toBeTruthy();
    expect(result.current.blogs).toBeUndefined();
  });
  test("after data is fetched", async () => {
    const { result } = renderHook(() => useGetAllBlogs());
  });
});
