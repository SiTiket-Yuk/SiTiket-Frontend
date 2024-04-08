import Image from "next/image";
import Link from "next/link";

const EventItem = ({ img, name }) => {
	return (
		<div
			className="flex flex-col items-center justify-center
    hover:text-blue hover:cursor-pointer"
		>
			<Image
				className="object-cover w-56 md:h-auto"
				sizes="100vw"
				width={0}
				height={0}
				src={img}
				alt={name}
			/>
			<h1 className="font-medium py-2 text-xl">{name}</h1>
		</div>
	);
};

const TodayEvents = () => {
	return (
		<div className="flex flex-wrap w-1/2 justify-center lg:gap-8 sm:gap-5 pb-20">
			<EventItem img={"/ImageEvents/OvFestival.png"} name={"Festival"} />
			<EventItem img={"/ImageEvents/OvWorkshop.png"} name={"Workshop"} />
			<EventItem img={"/ImageEvents/OvWebinar.png"} name={"Webinar"} />
			<EventItem img={"/ImageEvents/OvBisnis.png"} name={"Bisnis"} />
			<EventItem img={"/ImageEvents/OvOlahraga.png"} name={"Olahara"} />
		</div>
	);
};

export default TodayEvents;
