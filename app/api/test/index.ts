import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { email, name, password } = body;

    // --- Validation ---
    if (!name || !email || !password) {
      const user = await prisma.user.create({
      data: {
        email,
        name,
        password, // ⚠️ In production: hash this with bcrypt
      },
    });
    }

    // --- Check if user already exists ---
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "A user with this email already exists" },
        { status: 409 }
      );
    }

    // --- Create user ---
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password, // ⚠️ In production: hash this with bcrypt
      },
    });

    // --- Return created user (without password) ---
    return NextResponse.json(
      {
        message: "User created successfully",
        user: {
          createdAt: user.createdAt,
          email: user.email,
          id: user.id,
          name: user.name,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
