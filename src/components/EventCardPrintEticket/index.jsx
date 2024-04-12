import Link from "next/link";
import { Button } from "@nextui-org/react";
import { PiTicketLight } from "react-icons/pi";
import { useDisclosure } from "@nextui-org/react";
import Modal1Button from "../Modal1Button";
import {
	Card,
	CardBody,
	Divider,
} from "@nextui-org/react";

const CardPrintETicket = ({
  quantity,
}) => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	return (
		<Card className="lg:w-[450px] md:w-[300px] p-7">
			<Link href={"#"}>
				<CardBody>
					<div className="">	
            			<p className="font-bold text-xl pt-2 pb-2">Tiket Saya</p>
					</div>
          			<div className="flex flex-row justify-items-center mt-2 mb-2">
						<PiTicketLight size={32} />
						<p className="text-lg self-center ml-6">{quantity} tiket</p>
					</div>
				</CardBody>
				<Divider />
				<Button
          			color="secondary"
					radius="full"
					className="font-semibold text-base p-7 mb-6 mt-6 mx-auto"
					fullWidth
					onPress={onOpen}
				>
					Cetak Tiket Elektronik
				</Button>
				<Modal1Button 
					title={"Tiket Elektronik Berhasil Dicetak"}
					message={"Periksa email anda untuk mendapatkan dokumen tiket elektronik"}	
					onOpenChange={onOpenChange}
					isOpen={isOpen}
					buttonName={"Ok"}
				/>
			</Link>
		</Card>
	);
};

export default CardPrintETicket;
