import blog from "@/Model/blogModel";
import { ConnectToDb } from "@/utils/ConnectToDb";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  try {
    await ConnectToDb();
    const blogData = await blog.findOne({ _id: id });
    return NextResponse.json({ data: blogData }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { data: "something went wrong!!" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  try {
    await ConnectToDb();
    await blog.deleteOne({ _id: id });
    return NextResponse.json({ data: "Blog Deleted!!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { data: "something went wrong!!" },
      { status: 500 }
    );
  }
}
