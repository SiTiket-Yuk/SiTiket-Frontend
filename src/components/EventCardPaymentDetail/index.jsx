import { CiCalendar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

import {
	Avatar,
	Card,
	CardBody,
	CardFooter,
	Divider,
	Image,
} from "@nextui-org/react";

const CardPaymentDetail = ({
	eventImg,
	eventName,
	date,
	time,
	place,
	organizerLogo,
	organizerName,
}) => {
	return (
		<Card className="fullWidth p-4">
			<CardBody>
				<div style={{ 
					height: "180px", 
					background: `url(${eventImg.src}) center/cover no-repeat`,
					borderRadius: "10px",
					marginBottom: "16px"
				}}> </div>
				<div>	
					<p className="font-bold text-base pt-2 pb-2">{eventName}</p>
					<div className="flex flex-row justify-items-center mt-2 mb-2">
						<CiCalendar size={25} />
						<p className="text-sm self-center ml-4">{date}</p>
					</div>
					<div className="flex flex-row justify-items-center mt-2 mb-2">
						<CiClock2 size={25} />
						<p className="text-sm self-center ml-4">{time}</p>
						</div>
					<div className="flex flex-row justify-items-center mt-2 mb-2">
						<CiLocationOn size={25} />
						<p className="text-sm self-center ml-4">{place}</p>
					</div>
				</div>
			</CardBody>
			<Divider />
			<CardFooter className="flex gap-4">
				<Avatar radius="full" size="sm" src={organizerLogo.src} />
				<p className="text-sm">{organizerName}</p>
			</CardFooter>
		</Card>
	);
};

export default CardPaymentDetail;
