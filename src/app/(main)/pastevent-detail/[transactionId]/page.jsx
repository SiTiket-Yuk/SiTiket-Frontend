"use client";
import Image from "next/image";
import React, { useState } from "react";
import EventDescription from "@/components/EventDescription";
import Breadcrumbs from "@/components/BreadcrumbssNav";
import CategoryBar from "@/components/CategoryBar";
import CardDetail from "@/components/EventCardDetail";
import CardAddTix from "@/components/EventCardAddTix";
import CardPrintETicket from "@/components/EventCardPrintEticket";
import { eventDummyData } from "@/data/eventsJSON";

const EventDetail = ({ params }) => {
	// atur state tiket = sudah dimiliki/belum
	const [ticketOwned, setticketOwned] = useState(false);
	const handleticketOwned = () => {
		setticketOwned(true);
	};
	// With Dummy Data
	const transactionId = params.transactionId;
	const eventData = eventDummyData.filter((event) => event.id == transactionId)[0];

	return (
		<div className="container mx-auto max-w-[1100px]">
			<Breadcrumbs
				link1={"#"}
				link2={"#"}
				link3={"#"}
				pageName1={"Tiket"}
				pageName2={"Event Lalu"}
				pageName3={eventData.name}
			/>
			<div className="flex flex-column gap-10 mb-32">
				<div className="basis-3/4">
					<div>
						<Image
							width="0"
							height="0"
							sizes="100vw"
							className="w-full h-auto"
							src={eventData.post}
							alt={eventData.name}
						/>
					</div>
					<EventDescription eventDesc={eventData.description} />
					<CategoryBar categories={eventData.categories}></CategoryBar>
				</div>
				<div className="ml-8 flex flex-col gap-8 basis-1/4">
					<CardDetail
						eventName={eventData.name}
						date={eventData.date}
						time={eventData.time}
						quantity={eventData.quantity}
						place={eventData.place}
						organizerLogo={eventData.organizerLogo.src}
						organizerName={eventData.organizerName}
					/>
				</div>
			</div>
		</div>
	);
};

export default EventDetail;
