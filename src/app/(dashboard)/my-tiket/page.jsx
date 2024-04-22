"use client";
import PaidEventCardDashboard from "@/components/PaidEventCardDashboard";
import EventCardDashboard from "@/components/EventCardDashboard";
import EventCardImg from "../../../../public/imageEvents/EventCardImg.png";
import AvatarDefault from "../../../../public/imageDefault/AvatarDefault.png";
import LogoBeekind from "../../../../public/logo/LogoBeekind.png";
import { Tabs, Tab, Avatar } from "@nextui-org/react";
import { ScrollShadow } from "@nextui-org/react";

const DataEventNotFound = () => {
	return (
		<div className="h-[47.5rem] flex items-center justify-center">
			<div className="flex flex-col items-center justify-center">
				{/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
				<img
					loading="lazy"
					srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/37bec079981aa5ccc497e6602ffc473a3391eae6069e3f985bf3f685dfd1385b?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/37bec079981aa5ccc497e6602ffc473a3391eae6069e3f985bf3f685dfd1385b?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/37bec079981aa5ccc497e6602ffc473a3391eae6069e3f985bf3f685dfd1385b?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/37bec079981aa5ccc497e6602ffc473a3391eae6069e3f985bf3f685dfd1385b?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/37bec079981aa5ccc497e6602ffc473a3391eae6069e3f985bf3f685dfd1385b?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/37bec079981aa5ccc497e6602ffc473a3391eae6069e3f985bf3f685dfd1385b?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/37bec079981aa5ccc497e6602ffc473a3391eae6069e3f985bf3f685dfd1385b?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/37bec079981aa5ccc497e6602ffc473a3391eae6069e3f985bf3f685dfd1385b?apiKey=05fb69c4b5394439b8c4f4be1065f6e4&"
					className="w-full aspect-[1.18] fill-rose-300 max-w-[280px]"
				/>
				<div className="text-[#929292] mt-6 text-base">Belum ada tiket</div>
			</div>
		</div>
	);
};

const TabUnpaidEvents = ({ dataEvents }) => {
	// GET Unpaid Events data and use Map method on the dataEvents to EventCardDashboard
	return (
		<>
			{/* use dataEvents !== null */}
			{true ? (
				<ScrollShadow size={5} hideScrollBar className="h-[47.5rem]">
					<div className="pt-5 flex flex-col gap-5">
						<EventCardDashboard
							eventImg={EventCardImg}
							eventName={
								"Lorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum"
							}
							quantity={"1"}
							totalPayment={"1.000.000"}
							paymentDeadline={"31-04-2024, 12:00"}
						/>
						<EventCardDashboard
							eventImg={EventCardImg}
							eventName={
								"Lorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum"
							}
							quantity={"1"}
							totalPayment={"1.000.000"}
							paymentDeadline={"31-04-2024, 12:00"}
						/>
						<EventCardDashboard
							eventImg={EventCardImg}
							eventName={
								"Lorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum"
							}
							quantity={"1"}
							totalPayment={"1.000.000"}
							paymentDeadline={"31-04-2024, 12:00"}
						/>
						<EventCardDashboard
							eventImg={EventCardImg}
							eventName={
								"Lorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum"
							}
							quantity={"1"}
							totalPayment={"1.000.000"}
							paymentDeadline={"31-04-2024, 12:00"}
						/>
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
			{/* use dataEvents !== null */}
			{true ? (
				<ScrollShadow size={5} hideScrollBar className="h-[47.5rem]">
					<div className="pt-5 flex flex-col gap-5">
						<PaidEventCardDashboard
							eventImg={EventCardImg}
							eventName="Lorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum"
							date="04 Agustus 2024"
							cost={100000}
							organizerLogo={LogoBeekind}
							organizerName="Lorem"
							quantity="1"
						/>
						<PaidEventCardDashboard
							eventImg={EventCardImg}
							eventName="Lorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum"
							date="04 Agustus 2024"
							cost={100000}
							organizerLogo={LogoBeekind}
							organizerName="Lorem"
							quantity="1"
						/>
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
			{/* use dataEvents !== null */}
			{dataEvents === null ? (
				<div>{/* Infokan Component */}</div>
			) : (
				<DataEventNotFound />
			)}
		</>
	);
};

const Mytiket = () => {
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

			<div className="pl-9">
				<Tabs
					aria-label="Options"
					variant="underlined"
					size="lg"
					color="primary"
					fullWidth="true"
					classNames={{
						tabList: "gap-6 relative rounded-none p-0 border-b border-divider",
						cursor: "w-full bg-[#0075B4]",
						tab: "max-w-fit px-14 py-10",
						tabContent:
							"group-data-[selected=true]:text-[#0075B4] group-data-[selected=true]:font-bold",
					}}
				>
					<Tab key={"unpaidEvent"} title={"Belum Bayar"}>
						<TabUnpaidEvents />
					</Tab>
					<Tab key="activeEvent" title="Event Aktif">
						<TabActiveEvents />
					</Tab>
					<Tab key="pastEvent" title="Event Lalu">
						<TabPastEvents />
					</Tab>
				</Tabs>
			</div>
			<p className="text-end text-[#929292] text-lg pr-10">
				Copyright © 2024 siTiket All Rights Reserved
			</p>
		</div>
	);
};

export default Mytiket;
