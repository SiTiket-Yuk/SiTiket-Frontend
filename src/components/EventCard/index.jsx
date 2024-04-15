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
	id,
	image,
	name,
	date,
	cost,
	organizerLogo,
	organizerName,
}) => {
	const formattedCost = cost.toLocaleString("id-ID");

	return (
		<Card className="lg:w-[450px] md:w-[300px]">
			<Link href={`/event-detail/${id}`}>
				<CardBody className="p-5">
					<Image src={image} alt={name} />
					<div>
						<h3 className="py-5 font-medium text-xl">{name}</h3>
						<h4 className="pb-3 text-base text-[#929292]">{date}</h4>
						<h3 className="font-bold text-xl">Rp. {formattedCost}</h3>
					</div>
				</CardBody>
				<Divider />
				<CardFooter className="flex gap-4">
					<Avatar radius="full" size="md" src={organizerLogo} />
					<h4>{organizerName}</h4>
				</CardFooter>
			</Link>
		</Card>
	);
};

export default EventCard;
