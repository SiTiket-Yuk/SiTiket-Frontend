import "server-only";
import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

// encrypt session
export async function encrypt(payload) {
	return new SignJWT(payload)
		.setProtectedHeader({ alg: "HS256" })
		.setIssuedAt()
		.setExpirationTime("7d")
		.sign(encodedKey);
}

// decrpyt session
export async function decrypt(input) {
	const { payload } = await jwtVerify(input, encodedKey, {
		algorithms: ["HS256"],
	});
	return payload;
}

// create session
export async function createSession(userSession) {
	const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
	const session = await encrypt({ userSession, expiresAt });

	//console.log("SESSION", session);
	cookies().set("session", session, {
		httpOnly: true,
		secure: true,
		expires: expiresAt,
		sameSite: "lax",
		path: "/",
	});
}

// update session
export async function updateSession() {
	const session = cookies().get("session").value;
	const payload = await decrypt(session);

	if (!session || !payload) {
		return null;
	}

	const expires = new Date(Date.now() + 10 * 1000);
	cookies().set("session", session, {
		httpOnly: true,
		secure: true,
		expires: expires,
		sameSite: "lax",
		path: "/",
	});
}
// get session
export async function getSession() {
	const session = cookies().get("session")?.value;
	if (!session) return null;
	return await decrypt(session);
}

// delete session
export async function deleteSession() {
	cookies().delete("session", {
		httpOnly: true,
		secure: true,
		sameSite: "lax",
		path: "/",
	});
}
