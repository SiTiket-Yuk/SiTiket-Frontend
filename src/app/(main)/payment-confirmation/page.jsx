'use client'
import React, { useState } from "react"
import LogoBeekind from "../../../../public/logo/LogoBeekind.png";
import CardPaymentDetail from "@/components/EventCardPaymentDetail";
import EventCardImg from "../../../../public/imageEvents/EventCardImg.png";
import CardPaymentConfirmation from "@/components/EventCardPaymentConfirmation";
import { useRouter, useSearchParams } from 'next/navigation';

const EventDetail = () => {
	const router = useRouter();
	const {quantity, cost} = useSearchParams(router);

	return (
		<div className="container mx-auto max-w-[1100px] mt-16 mb-16">
			<p className="text-xl font-bold mt-16 mb-10">Detail Pemesanan</p>
			<div className="flex flex-row gap-8 mb-32">
				<div className="basis-3/4">
				<CardPaymentDetail
						eventImg={EventCardImg}
						eventName={"Mengenal Dunia Copy Writing"}
						date={"04 Agustus 2024"}
						time={"20.00 PM"}
						place={"Zoom Meeting"}
						organizerLogo={LogoBeekind}
						organizerName={"Lorem"}
				/>
				</div>
				<div class="basis-1/4 ml-8 flex flex-col gap-8">
					<CardPaymentConfirmation
						totalTix={quantity}
						tixPrice={cost}
					/>
				</div>
			</div>
		</div>
	);
};

export default EventDetail;
