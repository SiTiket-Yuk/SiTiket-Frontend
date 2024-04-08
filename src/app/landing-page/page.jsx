import Image from "next/image";
import { Button } from "@nextui-org/react";
import { FaArrowRight } from "react-icons/fa";
import EventsFeaturedList from "@/components/EventsFeaturedList";
import EventsOngoingThisWeek from "@/components/EventsOngoingThisWeek";
import EventsOverview from "@/components/EventsOverview";
import PostColdiac from "../../../public/imageEventsPoster/PostColdiac.png";

const LandingPage = () => {
	return (
		<>
			<EventsOverview />
			<div className="container mx-auto flex flex-col">
				<EventsFeaturedList />
				<Image src={PostColdiac} alt={"Event Poster"} />
				<EventsOngoingThisWeek />
				<Button
					radius="full"
					color="secondary"
					endContent={<FaArrowRight />}
					className="font-semibold text-base p-7 mb-10 mx-auto"
				>
					Jelajahi lebih banyak event
				</Button>
			</div>
		</>
	);
};

export default LandingPage;
