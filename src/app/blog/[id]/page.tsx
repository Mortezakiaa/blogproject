"use client";

import DetailsCard from "@/components/DetailsCard";
import useDetailsBlog from "@/hooks/useDetailsBlog";
import { TParams } from "@/Types/Types";

export default function page({ params: { id } }: TParams) {
  const { DeleteBlog, EditBlog, blogData } = useDetailsBlog(id);

  return (
    <>
      {blogData && (
        <>
          <DetailsCard
            DeleteBlog={DeleteBlog}
            EditBlog={EditBlog}
            content={blogData.content}
            title={blogData.title}
          />
        </>
      )}
    </>
  );
}
