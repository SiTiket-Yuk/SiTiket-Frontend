import { CiCalendar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { PiTicketLight } from "react-icons/pi";

import {
	Card,
	CardBody,
	CardFooter,
	Divider,
	Avatar,
} from "@nextui-org/react";

const CardDetail = ({
	eventName,
	date,
	time,
	quantity,
	place,
	organizerLogo,
	organizerName,
}) => {

	return (
		<Card className="lg:w-[450px] md:w-[300px] p-7">
			<CardBody>
				<div>	
					<p className="font-bold text-xl pt-2 pb-2">{eventName}</p>
					<div className="flex flex-row justify-items-center mt-2 mb-2">
						<CiCalendar size={32} />
						<p className="text-lg self-center ml-6">{date}</p>
					</div>
					<div className="flex flex-row justify-items-center mt-2 mb-2">
						<CiClock2 size={32} />
						<p className="text-lg self-center ml-6">{time}</p>
					</div>
					<div className="flex flex-row justify-items-center mt-2 mb-2">
						<CiLocationOn size={32} />
						<p className="text-lg self-center ml-6">{place}</p>
					</div>
					<div className="flex flex-row justify-items-center mt-2 mb-2">
						<PiTicketLight size={32} />
						<p className="text-lg self-center ml-6">{quantity}</p>
					</div>
				</div>
			</CardBody>
			<Divider />
			<CardFooter className="flex gap-4">
				<Avatar radius="full" size="md" src={organizerLogo.src} />
				<h4>{organizerName}</h4>
			</CardFooter>
		</Card>
	);
};

export default CardDetail;
