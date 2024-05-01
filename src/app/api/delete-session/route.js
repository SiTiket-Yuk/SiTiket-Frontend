import { NextResponse } from "next/server";
import { deleteSession } from "@/app/lib/session";

export async function DELETE() {
	// Delete the session cookie
	await deleteSession();

	// Return a response indicating success
	return NextResponse.json({
		status: 200,
		message: "Session has been deleted",
	});
}
