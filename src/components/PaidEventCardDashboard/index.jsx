import { PiTicketLight } from "react-icons/pi";
import Link from "next/link";

import {
	Card,
	CardBody,
	Divider,
	CardFooter,
	Avatar
} from "@nextui-org/react";

const PaidEventCardDashboard = ({
	eventImg,
	eventName,
	organizerLogo,
	organizerName,
	quantity,
	date

}) => {
	return (
		<Card className="border max-w-[720px]" style={{ boxShadow: '0px 1px 4px 0px rgba(25, 33, 71, 0.08)' }}>
			<Link href={"#"}>
				<CardBody className="flex flex-row gap-4">
					<div style={{ 
						width: "350px",
						height: "200px", 
						background: `url(${eventImg.src}) center/cover no-repeat`,
						borderRadius: "10px",
					}}> </div>
					<div className="w-full mr-4">	
						<p className="font-medium text-base pt-2 pb-2">{eventName}</p>
						<p className="text-sm self-center text-[#929292]">{date}</p>
						<div className="flex flex-row justify-items-center mb-6">
							<PiTicketLight size={32} color="rgb(156 163 175)" />
							<p className="text-sm self-center ml-2 text-[#414141]">{quantity} Tiket</p>
						</div>
						<Divider/>
						<CardFooter className="flex gap-4">
						<Avatar radius="full" size="md" src={organizerLogo.src} />
						<h4>{organizerName}</h4>
					</CardFooter>
					</div>
				</CardBody>
			</Link>
		</Card>
	);
};

export default PaidEventCardDashboard;
