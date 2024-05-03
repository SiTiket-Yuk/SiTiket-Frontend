import Link from "next/link";
import {
	Avatar,
	Card,
	CardBody,
	CardFooter,
	Divider,
	Image,
} from "@nextui-org/react";

const EventCardDiscovery = ({
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
		<Card className="lg:w-[16rem] ">
			<Link href={`/event-detail/${id}`}>
				<CardBody className="p-4">
					<Image src={image} alt={name} />
					<div>
						<h3 className="pt-2 pb-2 font-semibold text-base">{name}</h3>
						<h4 className="pb-6 text-sm text-[#929292]">{date}</h4>
						<h3 className="font-semibold text-base">Rp. {formattedCost}</h3>
					</div>
				</CardBody>
				<Divider/>
				<CardFooter className="flex gap-4">
					<Avatar radius="full" size="md" src={organizerLogo} />
					<h4>{organizerName}</h4>
				</CardFooter>
			</Link>
		</Card>
	);
};

export default EventCardDiscovery;
