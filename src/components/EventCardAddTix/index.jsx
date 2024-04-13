	'use client'
	import React, { useState } from "react"
	import Link from "next/link";
	import { useRouter } from 'next/navigation';

	import QuantityCounter from "../EventQuantityCounter";
	import { Button } from "@nextui-org/react";
	import {
		Card,
		CardBody,
		Divider,
	} from "@nextui-org/react";

	const CardAddTix = ({
		cost, quantityTix,
		initialAvailable = true
	}) => {
		const [available, setAvailable] = useState(initialAvailable);
		const [isDisabled, setIsDisabled] = useState(!available);

		const buttonColor = available ? "#B05F8A" : "#929292";
		const buttonText = available ? "Lanjutkan Pembayaran" : "Tiket Tidak Tersedia";
		const buttonTextColor = "#FFFFFF";

		const router = useRouter();
		
		const handlePageNavigation = () => {
			router.push("/payment-confirmation");
		};
		return (
			<Card className="lg:w-[360px] md:w-[150px] p-7">
				<Link href={"#"}>
					<CardBody>
						<div className="">	
							<p className="font-bold text-base pt-2 pb-2">Beli Tiket</p>
							<div className="flex flex-row justify-between items-center mt-2 mb-2">
								<p className="text-sm">{cost}</p>
								<div className="ml-4 text-sm">
									<QuantityCounter 
										quantityTicket={quantityTix}
									/>
								</div>
							</div>
						</div>
					</CardBody>
					<Divider />
					<Button
						fullWidth
						radius="full"
						className="font-semibold text-sm p-6 mb-6 mt-6 mx-auto"
						style={{ backgroundColor: buttonColor, color: buttonTextColor }}
						disabled={!available}
						onClick={handlePageNavigation}
					>
						{buttonText}
					</Button>
				</Link>
			</Card>
		);
	};

	export default CardAddTix;
