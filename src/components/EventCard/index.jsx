import Link from "next/link";
import {
	Avatar,
	Card,
	CardBody,
	CardFooter,
	Divider,
	Image,
} from "@nextui-org/react";

const EventCard = ({
	eventImg,
	eventName,
	date,
	cost,
	organizerLogo,
	organizerName,
}) => {
	const formattedCost = cost.toLocaleString("id-ID");

	return (
		<Card className="lg:w-[450px] md:w-[300px]">
			<Link href={"#"}>
				<CardBody className="p-5">
					<Image src={eventImg.src} alt={eventName} />
					<div>
						<h3 className="py-5 font-medium text-xl">{eventName}</h3>
						<h4 className="pb-3 text-base text-[#929292]">{date}</h4>
						<h3 className="font-bold text-xl">Rp. {formattedCost}</h3>
					</div>
				</CardBody>
				<Divider />
				<CardFooter className="flex gap-4">
					<Avatar radius="full" size="md" src={organizerLogo.src} />
					<h4>{organizerName}</h4>
				</CardFooter>
			</Link>
		</Card>
	);
};

export default EventCard;
