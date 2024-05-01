"use client";
import PaidEventCardDashboard from "@/components/PaidEventCardDashboard";
import EventCardDashboard from "@/components/EventCardDashboard";
import AvatarDefault from "../../../../public/imageDefault/AvatarDefault.png";
import { Tabs, Tab, Avatar, ScrollShadow, Spinner } from "@nextui-org/react";
import Image from "next/image";
import EmptyContent from "../../../../public/images/EmptyContent.svg";
import { useEffect, useRef, useState } from "react";

const DataEventNotFound = () => {
	return (
		<div className="h-[47.5rem] flex items-center justify-center">
			<div className="flex flex-col items-center justify-center">
				<Image src={EmptyContent} alt="empty content" />
				<div className="text-[#929292] mt-6 text-base">Belum ada tiket</div>
			</div>
		</div>
	);
};

const TabUnpaidEvents = ({ dataEvents }) => {
	// GET Unpaid Events data and use Map method on the dataEvents to EventCardDashboard
	return (
		<>
			{dataEvents.length !== 0 ? (
				<ScrollShadow size={5} hideScrollBar className="h-[47.5rem]">
					<div className="flex flex-col gap-5">
						{dataEvents.map((event, index) => (
							<EventCardDashboard
								key={index}
								eventImg={event.dataEvents.image}
								eventName={event.dataEvents.eventName}
								quantity={event.dataEvents.ticket}
								totalPayment={event.dataEvents.total}
								paymentDeadline={event.dataEvents.timelimit}
							/>
						))}
					</div>
				</ScrollShadow>
			) : (
				<DataEventNotFound />
			)}
		</>
	);
};

const TabActiveEvents = ({ dataEvents }) => {
	// GET Active Events data and use Map method on the dataEvents to PaidEventCardDashboard
	return (
		<>
			{dataEvents.length !== 0 ? (
				<ScrollShadow size={5} hideScrollBar className="h-[47.5rem]">
					<div className="pt-5 flex flex-col gap-5">
						{dataEvents.map((event, index) => (
							<PaidEventCardDashboard
								key={index}
								eventImg={event.dataEvents.image}
								eventName={event.dataEvents.eventName}
								date={event.dataEvents.timelimit}
								cost={event.dataEvents.total / Number(event.dataEvents.ticket)}
								quantity={event.dataEvents.ticket}
								organizerLogo={event.dataEvents.logo}
								organizerName={event.dataEvents.organizer}
							/>
						))}
					</div>
				</ScrollShadow>
			) : (
				<DataEventNotFound />
			)}
		</>
	);
};

const TabPastEvents = ({ dataEvents }) => {
	// GET User's Past Events data and use Map method on the dataEvents to ???
	return (
		<>
			{dataEvents.length !== 0 ? (
				<ScrollShadow size={5} hideScrollBar className="h-[47.5rem]">
					<div className="pt-5 flex flex-col gap-5">
						{dataEvents.map((event, index) => (
							<PaidEventCardDashboard
								key={index}
								eventImg={event.dataEvents.image}
								eventName={event.dataEvents.eventName}
								date={event.dataEvents.timelimit}
								cost={event.dataEvents.total / Number(event.dataEvents.ticket)}
								quantity={event.dataEvents.ticket}
								organizerLogo={event.dataEvents.logo}
								organizerName={event.dataEvents.organizer}
							/>
						))}
					</div>
				</ScrollShadow>
			) : (
				<DataEventNotFound />
			)}
		</>
	);
};

const EventTabs = ({ fetchedData }) => {
	const [activeEvents, setActiveEvents] = useState([]);
	const [pastEvents, setPastEvents] = useState([]);
	const [unpaidEvents, setUnpaidEvents] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const fetchedDataRef = useRef(null);

	useEffect(() => {
		const date = new Date().toJSON().slice(0, 10);
		const currentDate = new Date(date).getTime();

		const fetchUserEvents = async () => {
			for (const eventId in fetchedData) {
				if (fetchedData[eventId].status === "Lunas") {
					const eventDate = new Date(fetchedData[eventId].timelimit).getTime();
					if (eventDate > currentDate) {
						setPastEvents((prevEvents) => [
							...prevEvents,
							{ dataEvents: fetchedData[eventId], eventId: eventId },
						]);
					} else {
						setActiveEvents((prevEvents) => [
							...prevEvents,
							{ dataEvents: fetchedData[eventId], eventId: eventId },
						]);
					}
				} else {
					setUnpaidEvents((prevEvents) => [
						...prevEvents,
						{ dataEvents: fetchedData[eventId], eventId: eventId },
					]);
				}
			}
			setIsLoading(false);
		};

		if (fetchedDataRef.current !== fetchedData) {
			fetchedDataRef.current = fetchedData;
			fetchUserEvents();
		}
	}, [fetchedData]);

	return (
		<div className="grow">
			<div
				className="py-10 w-full flex justify-between px-9"
				style={{ boxShadow: "0px 2px 6px 0px rgba(20, 20, 43, 0.06)" }}
			>
				<h2 className="font-extrabold text-[28px] text-[#0076b5]">
					Tiket Saya
				</h2>
				<Avatar src={AvatarDefault.src} />
			</div>

			{!isLoading ? (
				<div className="pl-9">
					<Tabs
						aria-label="Options"
						variant="underlined"
						size="lg"
						color="primary"
						fullWidth="true"
						classNames={{
							tabList:
								"gap-6 relative rounded-none p-0 border-b border-divider",
							cursor: "w-full bg-[#0075B4]",
							tab: "max-w-fit px-14 py-10",
							tabContent:
								"group-data-[selected=true]:text-[#0075B4] group-data-[selected=true]:font-bold",
						}}
					>
						<Tab key={"unpaidEvent"} title={"Belum Bayar"}>
							<TabUnpaidEvents dataEvents={unpaidEvents} />
						</Tab>
						<Tab key="activeEvent" title="Event Aktif">
							<TabActiveEvents dataEvents={activeEvents} />
						</Tab>
						<Tab key="pastEvent" title="Event Lalu">
							<TabPastEvents dataEvents={pastEvents} />
						</Tab>
					</Tabs>
				</div>
			) : (
				<div className="h-[54rem] flex items-center justify-center">
					<div className="flex flex-col items-center justify-center">
						<Spinner className="self-auto" size="lg" />
					</div>
				</div>
			)}
			<p className="text-end text-[#929292] text-lg pr-10">
				Copyright © 2024 siTiket All Rights Reserved
			</p>
		</div>
	);
};

export default EventTabs;
