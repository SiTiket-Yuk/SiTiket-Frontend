import { PiTicketLight } from "react-icons/pi";
import Link from "next/link";

import {
	Card,
	CardBody,
	Divider,
} from "@nextui-org/react";

const CardDashboard = ({
	eventImg,
	eventName,
	quantity,
    totalPayment,
    paymentDeadline,

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
						<div className="flex flex-row justify-items-center mb-6">
							<PiTicketLight size={32} color="rgb(156 163 175)" />
							<p className="text-sm self-center ml-2 text-[#414141]">{quantity} Tiket</p>
						</div>
						<Divider/>
						<div className="flex flex-row justify-between items-center">
							<p className="font-bold text-lg mt-4 pb-2">Total Bayar</p>
							<p className="font-bold text-lg mt-4 pb-2">Rp. {totalPayment}</p>
						</div>
						<p className="text-sm self-center text-gray-400 pb-2">Selesaikan pembayaran sebelum {paymentDeadline}</p>
					</div>
				</CardBody>
			</Link>
		</Card>
	);
};

export default CardDashboard;
