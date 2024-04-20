"use client";
import Image from "next/image";
import Link from "next/link";
import { SearchIcon } from "../../../../public/logo/SearchIcon.jsx";
import React, { useState } from "react";
import { ScrollShadow } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import EventCard from "@/components/EventCard";
import EventCardImg from "../../../../public/imageEvents/EventCardImg.png";
import LogoBeekind from "../../../../public/logo/LogoBeekind.png";
import { Pagination } from "@nextui-org/react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { ListboxWrapper } from "./ListboxWrapper";

const Discovery = () => {
	const [pencarian, setPencarian] = useState("");

	const handleChange = (event) => {
		const { value } = event.target;
		setPencarian(value);

		if (value.length == 0) {
			setPencarian("");
		}
	};

	const items = [
		{
			key: "new",
			label: "New file",
		},
		{
			key: "copy",
			label: "Copy link",
		},
		{
			key: "edit",
			label: "Edit file",
		},
		{
			key: "delete",
			label: "Delete file",
		},
		{
			key: "tes",
			label: "Tes",
		},
	];

	return (
		<div className="container mx-auto flex flex-col">
			<ScrollShadow hideScrollBar className="h-[1697px]">
				<div class="flex justify-center mt-24">
					<div class="relative h-[57px] w-[1107px] min-w-[200px]">
						<input
							class="peer h-full w-full rounded-full border border-[#F2F2F2] bg-transparent px-6 py-3 font-sans text-base font-normal text-[#414141] outline outline-0 transition-all placeholder-shown:border-2 placeholder-shown:border-[#F2F2F2] focus:border-2 focus:border-[#F2F2F2] disabled:border-0 disabled:bg-blue-gray-50"
							placeHolder="Cari Event"
							value={pencarian}
							onChange={handleChange}
						/>
						{pencarian.length === 0 && (
							<div
								class="absolute inset-y-0 right-6 flex items-center pr-3 pointer-events-none"
								style={{ color: "#929292" }}
							>
								<SearchIcon size={18} />
							</div>
						)}
					</div>
				</div>

				{pencarian && (
					<div
						className="flex justify-start mt-4 w-[1107px] h-[217px] bg-white shadow-sm rounded-lg border-2 border-[#F2F2F2]"
						style={{
							position: "absolute",
							left: "50%",
							transform: "translate(-50%)",
							zIndex: 100,
						}}
					>
						<ScrollShadow
							size={20}
							hideScrollBar
							className="h-[200px] mt-2 ml-1"
						>
							<Listbox
								items={items}
								aria-label="Dynamic Actions"
								className="w-[1095px]"
							>
								{(item) => (
									<ListboxItem
										key={item.key}
										className=" hover:!bg-warning hover:!text-white"
										style={{ height: "46px" }}
										href="/"
									>
										{item.label}
									</ListboxItem>
								)}
							</Listbox>
						</ScrollShadow>
					</div>
				)}

				<div className="flex">
					<div class="flex-row">
						<div
							class="flex mt-8 "
							style={{
								position: "relative",
								width: "260px",
								height: "282px",
								left: "215px",
								boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
							}}
						>
							<div class="min-w-[200px] peer h-full w-full rounded-lg border border-[#E9E9E9] bg-transparent px-6 py-3 font-sans text-base font-normal text-[#414141] outline outline-0 transition-all placeholder-shown:border-3 placeholder-shown:border-[#E9E9E9] focus:border-3 focus:border-[#E9E9E9] disabled:border-0 disabled:bg-blue-gray-50">
								<fieldset class="mb-2">
									<legend class="sr-only">Kategori</legend>

									<div class="flex items-center mb-4">
										<label class="text-sm font-medium text-gray-900 block">
											Kategori
										</label>
									</div>

									<div class="flex items-center mb-4">
										<input
											id="kategori-option-1"
											type="radio"
											name="kategori"
											value="Semua"
											class="h-4 w-4 border-gray-300"
											style={{ accentColor: "#b5618d" }}
											aria-labelledby="kategori-option-1"
											aria-describedby="kategori-option-1"
											defaultChecked
										/>
										<label
											for="kategori-option-1"
											class="text-sm font-medium text-gray-900 ml-2 block"
										>
											Semua
										</label>
									</div>

									<div class="flex items-center mb-4">
										<input
											id="kategori-option-2"
											type="radio"
											name="kategori"
											value="Webinar"
											class="h-4 w-4 border-gray-300 "
											style={{ accentColor: "#b5618d" }}
											aria-labelledby="kategori-option-2"
											aria-describedby="kategori-option-2"
										/>
										<label
											for="kategori-option-2"
											class="text-sm font-medium text-gray-900 ml-2 block"
										>
											Webinar
										</label>
									</div>

									<div class="flex items-center mb-4">
										<input
											id="kategori-option-3"
											type="radio"
											name="kategori"
											value="Workshop"
											class="h-4 w-4 border-gray-300 "
											style={{ accentColor: "#b5618d" }}
											aria-labelledby="kategori-option-3"
											aria-describedby="kategori-option-3"
										/>
										<label
											for="kategori-option-3"
											class="text-sm font-medium text-gray-900 ml-2 block"
										>
											workshop
										</label>
									</div>

									<div class="flex items-center mb-4">
										<input
											id="kategori-option-4"
											type="radio"
											name="kategori"
											value="Bisnis"
											class="h-4 w-4 border-gray-300 "
											style={{ accentColor: "#b5618d" }}
											aria-labelledby="kategori-option-4"
											aria-describedby="kategori-option-4"
										/>
										<label
											for="kategori-option-4"
											class="text-sm font-medium text-gray-900 ml-2 block"
										>
											Bisnis
										</label>
									</div>

									<div class="flex items-center mb-4">
										<input
											id="kategori-option-5"
											type="radio"
											name="kategori"
											value="Olahraga"
											class="h-4 w-4 border-gray-300 "
											style={{ accentColor: "#b5618d" }}
											aria-labelledby="kategori-option-5"
											aria-describedby="kategori-option-5"
										/>
										<label
											for="kategori-option-5"
											class="text-sm font-medium text-gray-900 ml-2 block"
										>
											Olahraga
										</label>
									</div>

									<div class="flex items-center mb-4">
										<input
											id="kategori-option-6"
											type="radio"
											name="kategori"
											value="Festival"
											class="h-4 w-4 border-gray-300 "
											style={{ accentColor: "#b5618d" }}
											aria-labelledby="kategori-option-6"
											aria-describedby="kategori-option-6"
										/>
										<label
											for="kategori-option-6"
											class="text-sm font-medium text-gray-900 ml-2 block"
										>
											Festival
										</label>
									</div>
								</fieldset>
							</div>
						</div>

						<div
							class="flex mt-8 "
							style={{
								position: "relative",
								width: "260px",
								height: "354px",
								left: "215px",
								boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
							}}
						>
							<div class="min-w-[200px] peer h-full w-full rounded-lg border border-[#E9E9E9] bg-transparent px-6 py-3 font-sans text-base font-normal text-[#414141] outline outline-0 transition-all placeholder-shown:border-3 placeholder-shown:border-[#E9E9E9] focus:border-3 focus:border-[#E9E9E9] disabled:border-0 disabled:bg-blue-gray-50">
								<fieldset class="mb-2">
									<legend class="sr-only">Harga</legend>

									<div class="flex items-center mb-4">
										<label class="text-sm font-medium text-gray-900 block">
											Harga
										</label>
									</div>

									<div class="flex items-center mb-4">
										<input
											id="Harga-option-1"
											type="radio"
											name="Harga"
											value="Semua"
											class="h-4 w-4 border-gray-300"
											style={{ accentColor: "#b5618d" }}
											aria-labelledby="Harga-option-1"
											aria-describedby="Harga-option-1"
										/>
										<label
											for="Harga-option-1"
											class="text-sm font-medium text-gray-900 ml-2 block"
										>
											Tertinggi
										</label>
									</div>

									<div class="flex items-center mb-4">
										<input
											id="Harga-option-2"
											type="radio"
											name="Harga"
											value="Webinar"
											class="h-4 w-4 border-gray-300 "
											style={{ accentColor: "#b5618d" }}
											aria-labelledby="Harga-option-2"
											aria-describedby="Harga-option-2"
										/>
										<label
											for="Harga-option-2"
											class="text-sm font-medium text-gray-900 ml-2 block"
										>
											Terendah
										</label>
									</div>

									<div class="flex items-center mb-4">
										<input
											id="Harga-option-3"
											type="radio"
											name="Harga"
											value="Workshop"
											class="h-4 w-4 border-gray-300 "
											style={{ accentColor: "#b5618d" }}
											aria-labelledby="Harga-option-3"
											aria-describedby="Harga-option-3"
										/>
										<label
											for="Harga-option-3"
											class="text-sm font-medium text-gray-900 ml-2 block"
										>
											Gratis
										</label>
									</div>

									<legend class="sr-only">Jadwal</legend>

									<div class="flex items-center mb-4">
										<label class="text-sm font-medium text-gray-900 block">
											Jadwal
										</label>
									</div>

									<div class="flex items-center mb-4">
										<input
											id="Jadwal-option-4"
											type="radio"
											name="Jadwal"
											value="Bisnis"
											class="h-4 w-4 border-gray-300 "
											style={{ accentColor: "#b5618d" }}
											aria-labelledby="Jadwal-option-4"
											aria-describedby="Jadwal-option-4"
										/>
										<label
											for="Jadwal-option-4"
											class="text-sm font-medium text-gray-900 ml-2 block"
										>
											Terdekat
										</label>
									</div>

									<div class="flex items-center mb-6">
										<input
											id="Jadwal-option-5"
											type="radio"
											name="Jadwal"
											value="Olahraga"
											class="h-4 w-4 border-gray-300 "
											style={{ accentColor: "#b5618d" }}
											aria-labelledby="Jadwal-option-5"
											aria-describedby="Jadwal-option-5"
										/>
										<label
											for="Jadwal-option-5"
											class="text-sm font-medium text-gray-900 ml-2 block"
										>
											Terjauh
										</label>
									</div>

									<button
										className="ml-2 mb-6 block w-[169px] h-[42px] select-none rounded-full bg-pink-400 text-white text-sm shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50"
										type="button"
										style={{
											borderRadius: "40px",
											backgroundColor: "#b5618d",
											fontSize: "14px",
										}}
										data-ripple-light="true"
									>
										Saring Hasil
									</button>
								</fieldset>
							</div>
						</div>
					</div>

					<div className="container mx-auto flex-row">
						<div
							class="flex mt-8"
							style={{ position: "relative", left: "250px" }}
						>
							<h2 className="font-extrabold lg:text-2xl">Semua Event</h2>
						</div>

						<div
							class="flex mt-10"
							style={{
								position: "relative",
								left: "250px",
								width: "805px",
								height: "368px",
							}}
						>
							<div className="flex">
								<div class="rounded-lg">
									<EventCard
										eventImg={EventCardImg}
										eventName={"Lorem Ipsum Lorem"}
										date={"04 Agustus 2024"}
										cost={100000}
										organizerLogo={LogoBeekind}
										organizerName={"Lorem"}
										style={{ width: "247px", height: "368px" }}
									/>
								</div>
								<div class="ml-8 rounded-lg">
									<EventCard
										eventImg={EventCardImg}
										eventName={"Lorem Ipsum"}
										date={"04 Agustus 2024"}
										cost={100000}
										organizerLogo={LogoBeekind}
										organizerName={"Lorem"}
										style={{ width: "247px", height: "368px" }}
									/>
								</div>
								<div class="ml-8 rounded-lg">
									<EventCard
										eventImg={EventCardImg}
										eventName={"Lorem Ipsum"}
										date={"04 Agustus 2024"}
										cost={100000}
										organizerLogo={LogoBeekind}
										organizerName={"Lorem"}
										style={{ width: "247px", height: "368px" }}
									/>
								</div>
							</div>
						</div>

						<div
							class="flex mt-10"
							style={{
								position: "relative",
								left: "250px",
								width: "805px",
								height: "368px",
							}}
						>
							<div className="flex">
								<div class="rounded-lg">
									<EventCard
										eventImg={EventCardImg}
										eventName={
											"Lorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum"
										}
										date={"04 Agustus 2024"}
										cost={100000}
										organizerLogo={LogoBeekind}
										organizerName={"Lorem"}
										style={{ width: "247px", height: "368px" }}
									/>
								</div>
								<div class="ml-8 rounded-lg">
									<EventCard
										eventImg={EventCardImg}
										eventName={"Lorem Ipsum"}
										date={"04 Agustus 2024"}
										cost={100000}
										organizerLogo={LogoBeekind}
										organizerName={"Lorem"}
										style={{ width: "247px", height: "368px" }}
									/>
								</div>
								<div class="ml-8 rounded-lg">
									<EventCard
										eventImg={EventCardImg}
										eventName={"Lorem Ipsum"}
										date={"04 Agustus 2024"}
										cost={100000}
										organizerLogo={LogoBeekind}
										organizerName={"Lorem"}
										style={{ width: "247px", height: "368px" }}
									/>
								</div>
							</div>
						</div>

						<div
							class="flex mt-10"
							style={{
								position: "relative",
								left: "250px",
								width: "805px",
								height: "368px",
							}}
						>
							<div className="flex">
								<div class="rounded-lg">
									<EventCard
										eventImg={EventCardImg}
										eventName={"Lorem Ipsum  "}
										date={"04 Agustus 2024"}
										cost={100000}
										organizerLogo={LogoBeekind}
										organizerName={"Lorem"}
										style={{ width: "247px", height: "368px" }}
									/>
								</div>
								<div class="ml-8 rounded-lg">
									<EventCard
										eventImg={EventCardImg}
										eventName={"Lorem Ipsum"}
										date={"04 Agustus 2024"}
										cost={100000}
										organizerLogo={LogoBeekind}
										organizerName={"Lorem"}
										style={{ width: "247px", height: "368px" }}
									/>
								</div>
								<div class="ml-8 rounded-lg">
									<EventCard
										eventImg={EventCardImg}
										eventName={"Lorem Ipsum"}
										date={"04 Agustus 2024"}
										cost={100000}
										organizerLogo={LogoBeekind}
										organizerName={"Lorem"}
										style={{ width: "247px", height: "368px" }}
									/>
								</div>
							</div>
						</div>

						<div
							className="mx-auto mt-10"
							style={{ position: "relative", width: "259px", height: "36px" }}
						>
							<div class="h-[40px] w-[350px]">
								<Pagination
									color="secondary"
									variant="light"
									isCompact
									showControls
									total={10}
									initialPage={1}
								/>
							</div>
						</div>
					</div>
				</div>
			</ScrollShadow>
		</div>
	);
};

export default Discovery;
