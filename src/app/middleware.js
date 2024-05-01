import { updateSession } from "@/app/lib/session";

export async function middleware(request) {
	return await updateSession(request);
}
