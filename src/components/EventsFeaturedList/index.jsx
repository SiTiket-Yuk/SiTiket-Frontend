import axios from "axios";
import EventCard from "@/components/EventCard";

const SITIKET_API = process.env.NEXT_PUBLIC_SITIKET_API;

const fetchEvents = async () => {
	const events = [];
	try {
		const response = await axios.get(`${SITIKET_API}/api/event/featured`);
		if (response.status === 200) {
			const dataResponse = response.data.events;
			for (const eventId in dataResponse) {
				const eventAsset = await axios.get(
					`${SITIKET_API}/api/image/asset/${eventId}`
				);

				dataResponse[eventId]["image"] = eventAsset.data.asset[0];
				dataResponse[eventId]["logo"] = eventAsset.data.asset[1];
				dataResponse[eventId]["eventId"] = eventId;

				events.push(dataResponse[eventId]);
			}
			return events;
		}

		return [];
	} catch (e) {
		console.log("ERROR");
		return [];
	}
};

const EventsFeaturedList = async () => {
	const events = await fetchEvents();
	return (
		<article className="flex flex-col mb-10">
			<h2 className="font-extrabold lg:text-2xl lg:pt-10 lg:pb-7">
				Event Pilihan
			</h2>
			<div className="flex flex-wrap lg:gap-8 sm:gap-5 lg:justify-between lg:items-stretch md:justify-center md:items-center">
				{events.map((event, index) => (
					<EventCard
						key={index}
						id={event.eventId}
						image={event.image}
						name={event.name}
						date={event.date}
						cost={event.price}
						organizerLogo={event.logo}
						organizerName={event.organizer}
					/>
				))}
			</div>
		</article>
	);
};

export default EventsFeaturedList;
