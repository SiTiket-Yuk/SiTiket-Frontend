import EventCard from "@/components/EventCard";
import { eventDummyData } from "@/data/eventsJSON";

const EventsFeaturedList = () => {
	return (
		<article className="flex flex-col mb-10">
			<h2 className="font-extrabold lg:text-2xl lg:pt-10 lg:pb-7">
				Event Pilihan
			</h2>
			<div className="flex flex-wrap lg:gap-8 sm:gap-5 lg:justify-between lg:items-stretch md:justify-center md:items-center">
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

export default EventsFeaturedList;
