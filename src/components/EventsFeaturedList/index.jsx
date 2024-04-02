import EventCard from "@/components/EventCard";
import EventCardImg from "../../../public/imageEvents/EventCardImg.png";
import LogoBeekind from "../../../public/logo/LogoBeekind.png";

const EventsFeaturedList = () => {
	return (
		<article className="flex flex-col lg:mx-52 md:mx-10">
			<h2 className="font-bold lg:text-2xl lg:pt-10 lg:pb-7">Event Pilihan</h2>
			<div className="flex flex-wrap lg:gap-8 sm:gap-5 lg:justify-between md:justify-center justify-center">
				<EventCard
					eventImg={EventCardImg}
					eventName={"Lorem Ipsum Lorem Ipsum Lorem Ipsum"}
					date={"04 Agustus 2024"}
					cost={100000}
					organizerLogo={LogoBeekind}
					organizerName={"Lorem"}
				/>
				<EventCard
					eventImg={EventCardImg}
					eventName={"Lorem Ipsum"}
					date={"04 Agustus 2024"}
					cost={100000}
					organizerLogo={LogoBeekind}
					organizerName={"Lorem"}
				/>
				<EventCard
					eventImg={EventCardImg}
					eventName={"Lorem Ipsum"}
					date={"04 Agustus 2024"}
					cost={100000}
					organizerLogo={LogoBeekind}
					organizerName={"Lorem"}
				/>
			</div>
		</article>
	);
};

export default EventsFeaturedList;
