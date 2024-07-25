import AddEditBlogs from "@/components/AddEditBlogs";
import { TParams } from "@/Types/Types";

export default function page({ params: { id } }: TParams) {
  return (
    <>
      <AddEditBlogs id={id} />
    </>
  );
}
