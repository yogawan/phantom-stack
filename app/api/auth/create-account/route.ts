// @/api/create-account/route.ts
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const { name, email, password } = body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return NextResponse.json({ message: "Email already used" }, { status: 400 });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    return NextResponse.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
