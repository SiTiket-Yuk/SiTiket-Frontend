import { NextResponse } from "next/server";
import { createSession } from "@/app/lib/session";

export async function POST(req) {
  const body = await req.json();

  let isAdmin;
  const userId = body.user;
  const email = body.email.split("@")[1];
  if (email === "admin.com") {
    isAdmin = true;
  } else {
    isAdmin = false;
  }
  const userSession = { uid: userId, inSession: true, isAdmin: isAdmin };

  await createSession(userSession);
  return NextResponse.json({
    status: 200,
    message: "Successfully create Session",
  });
}
