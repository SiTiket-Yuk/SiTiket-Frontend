import TodayEvents from "../TodayEvents";

const EventsOverview = () => {
	return (
		<article className="bg-overview flex flex-col items-center justify-center md:pt-20 sm:pt-5">
			<h1 className="font-bold lg:text-5xl md:text-3xl sm:text-xl my-7 mb-14">
				Temukan Event Seru Hari Ini!
			</h1>
			<TodayEvents />
		</article>
	);
};

export default EventsOverview;
