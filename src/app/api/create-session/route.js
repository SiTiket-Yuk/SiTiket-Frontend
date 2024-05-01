import { NextResponse } from "next/server";
import { createSession } from "@/app/lib/session";

export async function POST(req) {
	const body = await req.json();

	const userId = body.user;
	const userSession = { uid: userId, inSession: true };

	await createSession(userSession);
	return NextResponse.json({
		status: 200,
		message: "Successfully create Session",
	});
}
