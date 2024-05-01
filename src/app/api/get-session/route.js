import { NextResponse } from "next/server";
import { getSession } from "@/app/lib/session";

export async function GET() {
	const session = await getSession();

	console.log(session);

	return NextResponse.json({
		status: 200,
		uid: session.userSession.uid,
	});
}
