import { PiTicketLight } from "react-icons/pi";

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
		<Card className="max-w-[900px]">
			<CardBody className="flex flex-row gap-4">
				<div style={{ 
					width: "350px",
                    height: "200px", 
					background: `url(${eventImg.src}) center/cover no-repeat`,
					borderRadius: "10px",
				}}> </div>
				<div className="w-full mr-4">	
					<p className="font-medium text-xl pt-2 pb-2">{eventName}</p>
                    <div className="flex flex-row justify-items-center mb-6">
						<PiTicketLight size={32} color="rgb(156 163 175)" />
						<p className="text-lg self-center ml-2 text-gray-400">{quantity} Tiket</p>
					</div>
                    <Divider/>
                    <div className="flex flex-row justify-between items-center">
                        <p className="font-bold text-xl mt-6 pb-2">Total Bayar</p>
                        <p className="font-bold text-xl mt-6 pb-2">Rp. {totalPayment}</p>
                    </div>
                    <p className="text-lg self-center text-gray-400">Selesaikan pembayaran sebelum {paymentDeadline}</p>
				</div>
			</CardBody>
		</Card>
	);
};

export default CardDashboard;
