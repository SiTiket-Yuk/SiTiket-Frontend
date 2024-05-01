import axios from "axios";
import { getSession } from "@/app/lib/session";
import EventTabs from "./eventTabs";

const SITIKET_API = process.env.NEXT_PUBLIC_SITIKET_API;

const MyTiket = async () => {
	// GET Session
	const session = await getSession();
	const uid = session.userSession.uid;

	// Returned Value
	const fetchedData = [];

	try {
		// GET Registered User Events
		const response = await axios.get(`${SITIKET_API}/api/user/${uid}`);
		if (response.status === 200) {
			const userEvents = response.data.user.registeredevents;
			let i = 0;
			for (const eventId in userEvents) {
				const eventAsset = await axios.get(
					`${SITIKET_API}/api/image/asset/${eventId}`
				);
				const eventName = await axios.get(
					`${SITIKET_API}/api/event/${eventId}`
				);

				fetchedData.push(userEvents[eventId]);
				fetchedData[i]["eventId"] = eventId;
				fetchedData[i]["image"] = eventAsset.data.asset[0];
				fetchedData[i]["logo"] = eventAsset.data.asset[1];
				fetchedData[i]["eventName"] = eventName.data.event.name;
				fetchedData[i]["organizer"] = eventName.data.event.organizer;
				i++;
			}
		}
	} catch (e) {
		console.log(e);
		console.log("ERRROOOOORRR");
	}

	return <EventTabs fetchedData={fetchedData} uid={uid} />;
};

export default MyTiket;
