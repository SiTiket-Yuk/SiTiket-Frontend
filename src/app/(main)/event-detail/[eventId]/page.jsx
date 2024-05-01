import { getSession } from "@/app/lib/session";
import axios from "axios";
import EventDetail from "./eventDetail";

const SITIKET_API = process.env.NEXT_PUBLIC_SITIKET_API;

const EventDetailPage = async ({ params }) => {
	const session = await getSession();
	const uid = session.userSession.uid;

	// Requested Event Detail
	const eventId = params.eventId;

	// Returned value
	let fetchedData = {
		isRegistered: false,
		ticketOwned: 0,
		status: false,
		eventData: {},
	};

	try {
		// Check event if registered already
		const response = await axios.get(`${SITIKET_API}/api/user/${uid}`);
		if (response.status === 200) {
			const userEvents = response.data.user.registeredevents;
			// User doesn't have any registerd events
			if (userEvents === undefined || userEvents === null) {
				fetchedData.isRegistered = false;
			}

			// Check every registered events that are same as eventId
			for (const event in userEvents) {
				if (eventId === event) {
					fetchedData.isRegistered = true;
					fetchedData.status = userEvents[event].status;
					fetchedData.ticketOwned = Number(userEvents[event].ticket);
					break;
				}
			}

			const responseEvent = await axios.get(
				`${SITIKET_API}/api/event/${eventId}`
			);

			if (responseEvent.status === 200) {
				const dataResponse = responseEvent.data.event;
				const eventAsset = await axios.get(
					`${SITIKET_API}/api/image/asset/${eventId}`
				);
				dataResponse["image"] = eventAsset.data.asset[0];
				dataResponse["logo"] = eventAsset.data.asset[1];
				fetchedData.eventData = dataResponse;

				fetchedData.eventData.eventId = eventId;
			}
		}
	} catch (e) {
		console.log(e);
		console.log("Error Fetching Data");
	}

	return <EventDetail fetchedData={fetchedData} />;
};

export default EventDetailPage;
