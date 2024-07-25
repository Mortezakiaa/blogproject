import blog from "@/Model/blogModel";
import { ConnectToDb } from "@/utils/ConnectToDb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await ConnectToDb();
    const { title, content } = await req.json();
    const blogs = await blog.create({
      title,
      content,
    });
    return NextResponse.json(
      { data: "Profile Created !!!", success: true },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { data: "Somethings Went Wrong!", success: false },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await ConnectToDb();
    const blogs = await blog.find();
    return NextResponse.json({ data: blogs, success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { data: "Somethings Went Wrong!", success: false },
      { status: 500 }
    );
  }
}
