import EventCard from "@/components/EventCard";
import { eventDummyData } from "@/data/eventsJSON";

const EventsOngoingThisWeek = () => {
	return (
		<article className="flex flex-col mb-10">
			<h2 className="font-extrabold lg:text-2xl lg:pt-10 lg:pb-7">
				Berlangsung Minggu Ini
			</h2>
			<div className="flex flex-wrap lg:gap-8 sm:gap-5 lg:justify-between md:justify-center justify-center">
				{eventDummyData.map((event) => (
					<EventCard
						key={event.name}
						id={event.id}
						image={event.post.src}
						name={event.name}
						date={event.date}
						cost={event.cost}
						organizerLogo={event.organizerLogo.src}
						organizerName={event.organizerName}
					/>
				))}
			</div>
		</article>
	);
};

export default EventsOngoingThisWeek;
