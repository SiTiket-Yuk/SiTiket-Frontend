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
	const eventId = params.eventId;
	const eventData = eventDummyData.filter((event) => event.id == eventId)[0];

	return (
		<div className="container mx-auto max-w-[1100px]">
			<Breadcrumbs
				link1={"#"}
				link2={"#"}
				link3={"#"}
				pageName1={"Home"}
				pageName2={"Webinar"}
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

					{/* jika tiket blm dimiliki user, tampilkan section beli tiket */}
					{!ticketOwned && (
						<CardAddTix
							eventId={eventId}
							cost={eventData.cost}
							quantityTicket={eventData.quantity}
						/>
					)}

					{/* jika tiket sudah dimiliki user, tampilkan section cetak tiket elektronik */}
					{ticketOwned && <CardPrintETicket quantity={"1"} />}
				</div>
			</div>
		</div>
	);
};

export default EventDetail;
