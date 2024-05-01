import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { FaArrowRight } from "react-icons/fa";
import EventsFeaturedList from "@/components/EventsFeaturedList";
import EventsOngoingThisWeek from "@/components/EventsOngoingThisWeek";
import EventsOverview from "@/components/EventsOverview";

const LandingPage = () => {
	return (
		<>
			<EventsOverview />
			<div className="container mx-auto flex flex-col">
				<EventsFeaturedList />
				<Image
					width="0"
					height="0"
					sizes="100vw"
					className="w-full h-auto"
					src={"/imageEventsPoster/PostColdiac.png"}
					alt={"Event Poster"}
				/>
				<EventsOngoingThisWeek />
				<Link href={"/discovery"} className="mx-auto">
					<Button
						radius="full"
						color="secondary"
						endContent={<FaArrowRight />}
						className="font-semibold text-base p-7 mb-10 mx-auto"
					>
						Jelajahi lebih banyak event
					</Button>
				</Link>
			</div>
		</>
	);
};

export default LandingPage;
