import blog from "@/Model/blogModel";
import { TParams } from "@/Types/Types";
import { ConnectToDb } from "@/utils/ConnectToDb";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params: { id } }: TParams) {
  try {
    await ConnectToDb();
    const blogData = await blog.findOne({ _id: id });
    return NextResponse.json(
      { data: blogData, success: true },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { data: "something went wrong!!", success: false },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request, { params: { id } }: TParams) {
  try {
    await ConnectToDb();
    await blog.deleteOne({ _id: id });
    return NextResponse.json(
      { data: "Blog Deleted!!", success: true },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { data: "something went wrong!!", success: false },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request) {
  try {
    await ConnectToDb();
    const body = await req.json();
    const { _id } = body;
    const blogData = await blog.findOne({ _id });
    Object.assign(blogData, body);
    blogData.save();
    return NextResponse.json(
      { data: "Blog Data is Updated !", success: true },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { data: "something went wrong!!", success: false },
      { status: 500 }
    );
  }
}
